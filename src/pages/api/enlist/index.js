import prisma from "@/lib/prismadb"

const SibApiV3Sdk = require('sib-api-v3-sdk');
const defaultClient = SibApiV3Sdk.ApiClient.instance;
const apiKey = defaultClient.authentications['api-key'];
apiKey.apiKey = process.env.NEXT_PUBLIC_SIB_KEY;
const apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();

export default async function POST(
  req, res
) {
  const {email} = req.body;
  let user = await prisma.user.findUnique({
    where: {email}
  })
  if (user){
      return res.status(400).json({message: "Email already waitlisted"});
    }
    try{
        user = await prisma.user.create({
        data: {
          email,
        }
      });
const sendSmtpEmail = {
                to: [
                  {
                    email: user.email,
                  },
                ],
                templateId: 1,
                params: {
                  EMAIL: user.email,
                },
                headers: {
                  'X-Mailin-custom':
                    'custom_header_1:custom_value_1|custom_header_2:custom_value_2',
                },
              }
              apiInstance.sendTransacEmail(sendSmtpEmail).then(
                function (data) {
                  console.log('API called successfully. Returned data: ' + data)
                },
                function (error) {
                  console.error(error)
                }
              )
      return res.status(200).json(user);
  }catch(err){
    return res.status(500).json({message: "Server error, please try again"});
  }
}
