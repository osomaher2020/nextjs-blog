// Next.js API route support: https://nextjs.org/docs/api-routes/introduction


// req = HTTP incoming message, res = HTTP server response
export default function handler(req, res) {
  res.status(200).json({ name: 'John Doe' })
}


// *** API Roures -> can be deployed as Serverless Functions (also known as Lambdas).


// ** use cases for an API Route:
    // -- Saving incoming data to your database
    // -- Securely communicating with a third-party API
    // -- Previewing draft content from your CMS
