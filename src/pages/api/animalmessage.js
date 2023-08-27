import { getAllAnimalMessage } from '../../../lib/db'

export default async (_, res) => {

    const animalmessage = await getAllAnimalMessage();

    // we are returning the sites array as a json object
    // therefore sites: wont be needed in the dashboard.js
    // since we have destructured the sites array
    // we access it using data.sites
    res.status(200).json({animalmessage});
};
