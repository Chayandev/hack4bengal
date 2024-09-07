const cron = require('node-cron');
const Request = require("../model/Request"); // Adjust the path to your Request model

// Schedule the task to run every 2 seconds
// Schedule the task to run every 2 seconds
cron.schedule('*/2 * * * * *', async () => {
  try {
    // Get the current time and the start of today
    const now = new Date();
    const startOfToday = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    
    // Find requests where the deadline is before today and isClosed is false
    const expiredRequests = await Request.find({
      deadline: { $lt: startOfToday },
      isClosed: false,
    });

    if (expiredRequests.length > 0) {
      // Update the isClosed field to true for expired requests
      await Request.updateMany(
        { deadline: { $lt: startOfToday }, isClosed: false },
        { $set: { isClosed: true } }
      );

      console.log(`Updated ${expiredRequests.length} expired requests to closed.`);
    } else {
      console.log('No expired requests found.');
    }
  } catch (error) {
    console.error('Error updating requests:', error);
  }
});
