const Mailjet = require("node-mailjet");

const mailjet = Mailjet.apiConnect(
    process.env.MAILJET_API_KEY,
    process.env.MAILJET_SECRET_KEY
);

const mailjetRequest = mailjet.post("send", { version: "v3.1" });

exports.sendMail = async (req,res) => {
    console.log(req.body.nameAnimal)
    const { to, from, subject, text } = req.body;

    mailjetRequest
        .request({
        Messages: [
            {
                From: {
                    Email: 'animaltalentukr@gmail.com',
                    Name: "",
                },
                To: [
                    {
                        Email: req.body.to,
                        Name: "",
                    },
                ],
                Subject: req.body.subject,
                // TextPart: req.body.text,
                // HtmlPart:"<h3>Dear passenger, welcome to Mailjet!</h3><br />May the delivery force be with you!",
                Variables : {"nameAnimal":req.body.nameAnimal},
                TemplateID: 5888523,
			    TemplateLanguage: true,
            },
        ],
    });

    try {
        const result = await mailjetRequest;
        return result;
    } catch (error) {
        console.log(error);
        return error;
    }
};

exports.getMail = async (req,res) => {
    console.log(req.body)
    const { to, from, subject, text } = req.body;

    mailjetRequest
        .request({
        Messages: [
            {
                From: {
                    Email: 'animaltalentukr@gmail.com',
                    Name: "",
                },
                To: [
                    {
                        Email: 'lilu7771984@gmail.com',
                        Name: "",
                    },
                ],
                Subject: 'AnimalTalent',
                // TextPart: req.body.text,
                HtmlPart:`<h3>Привіт,</h3><br />мене звати <b>${req.body.name}</b> <br /> ось мій номер телефону: <b>${req.body.phone}</b> <br /> ось мій емаїл: <b>${req.body.email}</b> <br /> мені сподобався  : <a href=\"https://animaltalent.com.ua/model_single?_id=${req.body.animalId}\">ось цей пухнастик</a><br /> Будь ласка, зв'яжіться зі мною з приводу нашої співпраці`,
                // Variables : {"nameAnimal":req.body.nameAnimal},
                // TemplateID: 5888523,
			    //TemplateLanguage: true, lilu7771984@gmail.com
            },
        ],
    });

    try {
        const result = await mailjetRequest;
        return result;
    } catch (error) {
        console.log(error);
        return error;
    }
};
exports.sendMessageMail = async (req,res) => {
    console.log(req.body)
    const { to, from, subject, text } = req.body;

    mailjetRequest
        .request({
        Messages: [
            {
                From: {
                    Email: 'animaltalentukr@gmail.com',
                    Name: "",
                },
                To: [
                    {
                        Email: 'lilu7771984@gmail.com',
                        Name: "",
                    },
                ],
                Subject: 'AnimalTalent',
                // TextPart: req.body.text, lilu7771984@gmail.com
                // HtmlPart:"<h3>Dear passenger, welcome to Mailjet!</h3><br />May the delivery force be with you!",
                HtmlPart:`<h3>Привіт,</h3><br />мене звати <b>${req.body.name}</b> <br /> ось мій номер телефону: <b>${req.body.phone}</b> <br /> ось мій емаїл: <b>${req.body.email}</b> <br /> <br /> ${req.body.message} <br /> <br />Будь ласка, зв'яжіться зі мною з приводу нашої співпраці`,
            },
        ],
    });

    try {
        const result = await mailjetRequest;
        return result;
    } catch (error) {
        console.log(error);
        return error;
    }
};