require("dotenv").config({ path: "./.env" });
const express = require("express");
const ActorsModel = require("./models/modelDescriptionCoin");
const BitcoinModel = require("./models/modelBitcoin");
const EthereumModel = require("./models/modelEthereum");
const BlockchainModel = require("./models/modelBlockchain");
const DefiModel = require("./models/modelDefi");
const AltcoinModel = require("./models/modelAltcoin");
const NftModel = require("./models/modelNft");
const RegulationModel = require("./models/modelRegulation");
const MetaverseModel = require("./models/modelMetaverse");
const FeatureModel = require("./models/modelFeature");
const OpinionModel = require("./models/modelOpinion");
const FollowupModel = require("./models/modelFollowup");
const MarketsModel = require("./models/modelMarkets");
const LearnModel = require("./models/modelLearn");
const FooterModel = require("./models/modelFooter");
const ClientBoxModel = require("./models/modelClientBox");
const ClientEmailModel = require("./models/modelClientEmail");
const TopNewsModel = require("./models/modelTopNews");
const TopFeatureModel = require("./models/modelTopFeature");
const TopOpinionModel = require("./models/modelTopOpinion");
const TopFollowupModel = require("./models/modelTopFollowup");
const TopMarketsModel = require("./models/modelTopMarkets");
const TopLearnModel = require("./models/modelTopLearn");
const PopularNewsModel = require("./models/modelPopularNews");
const DescriptionCoinModel = require("./models/modelDescriptionCoin");
const MessageModel = require("./models/modelMessage");
const EmailModel = require("./models/modelEmailSubscribe");
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const mailjetService = require("./mailjetService")
var mongoose_delete = require('mongoose-delete');
const coinstatsopenapi = require('@api/coinstatsopenapi');
// sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const fs = require('fs');
const app = express();
const mongoose = require("mongoose");

const { Console } = require("console");


// var cors = require('cors')

// var corsOptions = { 
//   origin: 'http://localhost:8100',
//   optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
// }
// filter 1156

app.get("/", async (req, res) => {
  res.sendFile(__dirname + "/main.html");
});

// serve your css as static
app.use(express.static(__dirname));
app.get("/privacy_policy", async (req, res) => {
  // res.json({ message: "Privacy Policy." });
  res.sendFile(__dirname + "/privacy_policy.html");

});
app.get("/delete_data", async (req, res) => {
  // res.json({ message: "Privacy Policy." });
  res.sendFile(__dirname + "/delete_data.html");
  //   fs.readFile('./privacy_policy.html', null, function (error, data) {
  //     if (error) {
  //         // response.writeHead(404);
  //         respone.write('Whoops! File not found!');
  //     } else {
  //         response.write(data);
  //     }
  //     response.end();
  // });
});
//////////////////////////////////send mail/////////////////////////////////////////////////////////////////////////////
// app.post("/send-mailjet", async (req, res) => {
//   try {
//       const response = await mailjetService.sendMail(req, res);
//       res.status(200).json({
//           status: "success",
//           message: "Email sent successfully",
//           data: response,
//       });
//   } catch (error) {
//       res.status(400).json({
//           status: "error",
//           message: "Email not sent",
//       });
//   }
// });
// app.post("/get-mailjet", async (req, res) => {
//   try {
//       const response = await mailjetService.getMail(req, res);
//       res.status(200).json({
//           status: "success",
//           message: "Email sent successfully",
//           data: response,
//       });
//   } catch (error) {
//       res.status(400).json({
//           status: "error",
//           message: "Email not sent",
//       });
//   }
// });
// app.post("/send-message-mailjet", async (req, res) => {
//   console.log(req)
//   try {
//       const response = await mailjetService.sendMessageMail(req, res);
//       res.status(200).json({
//           status: "success",
//           message: "Email sent successfully",
//           data: response,
//       });
//   } catch (error) {
//       res.status(400).json({
//           status: "error",
//           message: "Email not sent",
//       });
//   }
// });
//////////////////////////////////Actors//////////////////////////////////////////////////////////////////////////////////

app.post("/add_Actors", async (request, response) => {
  const data = new ActorsModel(request.body);
  
  console.log('/add_Actors', request.body)
  try {
    await data.save();
    response.send(data);
  } catch (error) {
    response.status(500).send(error);
  }
});
// show actors for main admin panel
app.get("/get_ActorsAll", async (request, response) => {
  console.log(request.query)
  // const query = { category: { $in: [ "Informatika", "Personalistika a HR"] } }
  const data = await ActorsModel.find().limit(20).sort({ createdAt: -1 });
  console.log(data)
  try {
    response.send(data);
  } catch (error) {
    response.status(500).send(error);
  }
});
// show actors for site
app.get("/get_Actors", async (request, response) => {

  // const query = { category: { $in: [ "Informatika", "Personalistika a HR"] } } ,{ 'status': 'aktiv' }
  const data = await ActorsModel.find({ 'status': 'aktiv' }).limit(20).sort({ createdAt: -1 });

  try {
    response.send(data);
  } catch (error) {
    response.status(500).send(error);
  }
});
app.get("/get_Actors/:id", async (request, response) => {
  const { id } = request.params;
  console.log('89', request.params)
  const data = await ActorsModel.findById(id);

  try {
    response.send(data);
  } catch (error) {
    response.status(500).send(error);
  }
});
app.get("/get_ActorsAfterFilter/", async (request, response) => {
  // const { d } = request.params;
  console.log('106', request.query)
  const data = await ActorsModel.find(request.query).limit(20).sort({ createdAt: -1 });
  console.log('108', data)
  try {
    response.send(data);
  } catch (error) {
    response.status(500).send(error);
  }
});
app.put("/update_Actors/:id", async (request, response) => {
  const { id } = request.params;

  console.log('99', id, request.body)

  try {
    data = await ActorsModel.findByIdAndUpdate(id,

      { $set: request.body }

      , { new: true });//respons update data
    //response.send(product);
    response.json(data);
  }
  catch (e) {
    response.status(500).send(e);
  }
});
app.delete("/delete_Actors/:id", async (request, response) => {
  try {
    console.log('118', request.params.id)
    const data = await ActorsModel.findByIdAndDelete(request.params.id);

    if (!data) response.status(404).send("No item found");
    response.status(200).send();
  } catch (error) {
    response.status(500).send(error);
  }
});
///////////////////////////////////AllNews///////////////////////////////////////////////////////////////////

app.get("/get_AllNews", async (request, response) => {
  let limit = request.query.limit
  try {
    const bitcoin= await BitcoinModel.find({}).limit(limit).sort({ createdAt: -1 });
    const ethereum = await EthereumModel.find({}).limit(limit).sort({ createdAt: -1 });
    const block = await BlockchainModel.find({}).limit(limit).sort({ createdAt: -1 });
    const defi = await DefiModel.find({}).limit(limit).sort({ createdAt: -1 });
    const altcoin = await AltcoinModel.find({}).limit(limit).sort({ createdAt: -1 });
    const nft = await NftModel.find({}).limit(limit).sort({ createdAt: -1 });
    const regulation = await RegulationModel.find({}).limit(limit).sort({ createdAt: -1 });
    const metavers = await MetaverseModel.find({}).limit(limit).sort({ createdAt: -1 });
    const feature = await FeatureModel.find({}).limit(limit).sort({ createdAt: -1 });
    const opinion = await OpinionModel.find({}).limit(limit).sort({ createdAt: -1 });
    const foll = await FollowupModel.find({}).limit(limit).sort({ createdAt: -1 });
    const markets = await MarketsModel.find({}).limit(limit).sort({ createdAt: -1 });
    const all = [...bitcoin, ...ethereum, ...block, ...defi, ...altcoin, ...nft, ...regulation, ...metavers, ...feature, ...opinion, ...foll, ...markets];
    
    response.send(all);
  } catch (error) {
    response.status(500).send(error);
  }
});

///////////////////////////////////BitcoinNews///////////////////////////////////////////////////////////////////
app.post("/add_BitcoinNews", async (request, response) => {
  try {
    if(request.body.top){
      const top = new TopNewsModel(request.body);
      try {
        await top.save();
      } catch (error) {
        response.status(500).send(error);
      }
    }
    if(request.body.popular){
      const popular = new PopularNewsModel(request.body);
      try {
        await popular.save();
      } catch (error) {
        response.status(500).send(error);
      }
    }
    const data = new BitcoinModel(request.body);
    await data.save();
    response.send(data);
  } catch (error) {
    response.status(500).send(error);
  }
});
app.get("/get_BitcoinNews", async (request, response) => {
  
  try {
    let limit = request.query.limit
    const category = await BitcoinModel.find({}).limit(limit).sort({ createdAt: -1 });
    response.send(category);
  } catch (error) {
    response.status(500).send(error);
  }
});
app.get("/get_BitcoinNews/:slug", async (request, response) => {
  try {
    const { slug } = request.params;
    const data = await BitcoinModel.findOne({slug:slug});
    response.send(data);
  } catch (error) {
    response.status(500).send(error);
  }
});
app.get("/get_BitcoinNewsById/:id", async (request, response) => {
  try {
    const { id } = request.params;
    const data = await BitcoinModel.findById(id);
    response.send(data);
  } catch (error) {
    response.status(500).send(error);
  }
});
app.put("/update_BitcoinNews/:id", async (request, response) => {
  const { id } = request.params;

  console.log('254', id, request.body)
  // if(request.body.top){
  //   const top = new TopNewsModel.findByIdAndUpdate(id,
  //     {
  //       $set: request.body
  //     }

  //     , { new: true });
  //   try {
  //     await top.save();
  //   } catch (error) {
  //     response.status(500).send(error);
  //   }
  // }
  // if(request.body.popular){
  //   const popular = new PopularNewsModel.findByIdAndUpdate(id,
  //     {
  //       $set: request.body
  //     }

  //     , { new: true });
  //   try {
  //     await popular.save();
  //   } catch (error) {
  //     response.status(500).send(error);
  //   }
  // }

  try {
    const data = await BitcoinModel.findByIdAndUpdate(id,
      {
        $set: request.body
      }

      , { new: true });//respons update data
    //response.send(product);
    response.json(data);
  }
  catch (e) {
    response.status(500).send(e);
  }
});
app.put("/update_BitcoinNewsByTitle/:title", async (request, response) => {
  const { title } = request.params;

  console.log('299', title, request.body)
   try {
    const data = await BitcoinModel.updateOne({title:title},
      {
        $set: request.body
      }

      , { new: true });//respons update data
    //response.send(product);
    response.json(data);
  }
  catch (e) {
    response.status(500).send(e);
  }
});
app.delete("/delete_BitcoinNews/:id", async (request, response) => {
  try {
    const processor = await BitcoinModel.findByIdAndDelete(request.params.id);

    if (!processor) response.status(404).send("No item found");
    response.status(200).send();
  } catch (error) {
    response.status(500).send(error);
  }
});
///////////////////////////////////EthereumNews///////////////////////////////////////////////////////////////////
app.post("/add_EthereumNews", async (request, response) => {
  
  try {
    const data = new EthereumModel(request.body);
  if(request.body.top){
    const top = new TopNewsModel(request.body);
    try {
      await top.save();
    } catch (error) {
      response.status(500).send(error);
    }
  }
  if(request.body.popular){
    const popular = new PopularNewsModel(request.body);
    try {
      await popular.save();
    } catch (error) {
      response.status(500).send(error);
    }
  }
    await data.save();
    response.send(data);
  } catch (error) {
    response.status(500).send(error);
  }
});
app.get("/get_EthereumNews", async (request, response) => {
  try {
    let limit = request.query.limit
    const category = await EthereumModel.find({}).limit(limit).sort({ createdAt: -1 });;
    response.send(category);
  } catch (error) {
    response.status(500).send(error);
  }
});
app.get("/get_EthereumNews/:slug", async (request, response) => {
  
  try {
    const { slug } = request.params;
    const data = await EthereumModel.findOne({slug:slug});
    console.log(data)
    response.send(data);
  } catch (error) {
    response.status(500).send(error);
  }
});
app.put("/update_EthereumNews/:id", async (request, response) => {
  const { id } = request.params;

  console.log('372', id, request.body)
  
  try {
    const data = await EthereumModel.findByIdAndUpdate(id,
      {
        $set: request.body
      }

      , { new: true });//respons update data
    //response.send(product);
    response.json(data);
  }
  catch (e) {
    response.status(500).send(e);
  }
});
app.put("/update_EthereumNewsByTitle/:title", async (request, response) => {
  const { title } = request.params;

  console.log('299', title, request.body)
   try {
    const data = await EthereumModel.updateOne({title:title},
      {
        $set: request.body
      }

      , { new: true });//respons update data
    //response.send(product);
    response.json(data);
  }
  catch (e) {
    response.status(500).send(e);
  }
});
app.delete("/delete_EthereumNews/:id", async (request, response) => {
  try {
    const processor = await EthereumModel.findByIdAndDelete(request.params.id);

    if (!processor) response.status(404).send("No item found");
    response.status(200).send();
  } catch (error) {
    response.status(500).send(error);
  }
});
///////////////////////////////////BlockchainNews///////////////////////////////////////////////////////////////////
app.post("/add_BlockchainNews", async (request, response) => {
  console.log('207', request.body)
  if(request.body.top){
    const top = new TopNewsModel(request.body);
    try {
      await top.save();
    } catch (error) {
      response.status(500).send(error);
    }
  }
  if(request.body.popular){
    const popular = new PopularNewsModel(request.body);
    try {
      await popular.save();
    } catch (error) {
      response.status(500).send(error);
    }
  }
  const data = new BlockchainModel(request.body);
  try {
    await data.save();
    response.send(data);
  } catch (error) {
    response.status(500).send(error);
  }
});
app.get("/get_BlockchainNews", async (request, response) => {
  try {
    let limit = request.query.limit
    const category = await BlockchainModel.find({}).limit(limit).sort({ createdAt: -1 });
    response.send(category);
  } catch (error) {
    response.status(500).send(error);
  }
});
app.get("/get_BlockchainNews/:slug", async (request, response) => {
  
  try {
    const { slug } = request.params;
    const data = await BlockchainModel.findOne({slug:slug});
    console.log(data)
    response.send(data);
  } catch (error) {
    response.status(500).send(error);
  }
});
app.get("/get_BlockchainNews/:id", async (request, response) => {
  try {
    const { id } = request.params;
    const data = await BlockchainModel.findById(id);
    response.send(data);
  } catch (error) {
    response.status(500).send(error);
  }
});
app.put("/update_BlockchainNews/:id", async (request, response) => {
  const { id } = request.params;

  console.log('480', id, request.body)

  try {
    const data = await BlockchainModel.findByIdAndUpdate(id,
      {
        $set: request.body
      }

      , { new: true });//respons update data
    //response.send(product);
    response.json(data);
  }
  catch (e) {
    response.status(500).send(e);
  }
});
app.put("/update_BlockchainNewsByTitle/:title", async (request, response) => {
  const { title } = request.params;

  console.log('299', title, request.body)
   try {
    const data = await BlockchainModel.updateOne({title:title},
      {
        $set: request.body
      }

      , { new: true });//respons update data
    //response.send(product);
    response.json(data);
  }
  catch (e) {
    response.status(500).send(e);
  }
});
app.delete("/delete_BlockchainNews/:id", async (request, response) => {
  try {
    const processor = await BlockchainModel.findByIdAndDelete(request.params.id);

    if (!processor) response.status(404).send("No item found");
    response.status(200).send();
  } catch (error) {
    response.status(500).send(error);
  }
});
///////////////////////////////////DefiNews///////////////////////////////////////////////////////////////////
app.post("/add_DefiNews", async (request, response) => {
  console.log('207', request.body)
  if(request.body.top){
    const top = new TopNewsModel(request.body);
    try {
      await top.save();
    } catch (error) {
      response.status(500).send(error);
    }
  }
  if(request.body.popular){
    const popular = new PopularNewsModel(request.body);
    try {
      await popular.save();
    } catch (error) {
      response.status(500).send(error);
    }
  }
  const data = new DefiModel(request.body);
  try {
    await data.save();
    response.send(data);
  } catch (error) {
    response.status(500).send(error);
  }
});
app.get("/get_DefiNews", async (request, response) => {
  try {
    let limit = request.query.limit
    const category = await DefiModel.find({}).limit(limit).sort({ createdAt: -1 });
    response.send(category);
  } catch (error) {
    response.status(500).send(error);
  }
});
app.get("/get_DefiNews/:slug", async (request, response) => {
  
  try {
    const { slug } = request.params;
    const data = await DefiModel.findOne({slug:slug});
    console.log(data)
    response.send(data);
  } catch (error) {
    response.status(500).send(error);
  }
});
app.get("/get_DefiNews/:id", async (request, response) => {
  try {
    const { id } = request.params;
    const data = await DefiModel.findById(id);
    response.send(data);
  } catch (error) {
    response.status(500).send(error);
  }
});
app.put("/update_DefiNews/:id", async (request, response) => {
  const { id } = request.params;

  console.log('573', id, request.body)

  try {
    const data = await DefiModel.findByIdAndUpdate(id,
      {
        $set: request.body
      }

      , { new: true });//respons update data
    //response.send(product);
    response.json(data);
  }
  catch (e) {
    response.status(500).send(e);
  }
});
app.put("/update_DefiNewsByTitle/:title", async (request, response) => {
  const { title } = request.params;

  console.log('299', title, request.body)
   try {
    const data = await DefiModel.updateOne({title:title},
      {
        $set: request.body
      }

      , { new: true });//respons update data
    //response.send(product);
    response.json(data);
  }
  catch (e) {
    response.status(500).send(e);
  }
});
app.delete("/delete_DefiNews/:id", async (request, response) => {
  try {
    const processor = await DefiModel.findByIdAndDelete(request.params.id);

    if (!processor) response.status(404).send("No item found");
    response.status(200).send();
  } catch (error) {
    response.status(500).send(error);
  }
});
///////////////////////////////////AltcoinNews///////////////////////////////////////////////////////////////////
app.post("/add_AltcoinNews", async (request, response) => {
  console.log('207', request.body)
  const data = new AltcoinModel(request.body);
  if(request.body.top){
    const top = new TopNewsModel(request.body);
    try {
      await top.save();
    } catch (error) {
      response.status(500).send(error);
    }
  }
  if(request.body.popular){
    const popular = new PopularNewsModel(request.body);
    try {
      await popular.save();
    } catch (error) {
      response.status(500).send(error);
    }
  }
  try {
    await data.save();
    response.send(data);
  } catch (error) {
    response.status(500).send(error);
  }
});
app.get("/get_AltcoinNews", async (request, response) => {
  try {
    let limit = request.query.limit
    const category = await AltcoinModel.find({}).limit(limit).sort({ createdAt: -1 });
    response.send(category);
  } catch (error) {
    response.status(500).send(error);
  }
});
app.get("/get_AltcoinNews/:slug", async (request, response) => {
  try {
    const { slug } = request.params;
    const data = await AltcoinModel.findOne({slug:slug});
    console.log(data)
    response.send(data);
  } catch (error) {
    response.status(500).send(error);
  }
});
app.get("/get_AltcoinNews/:id", async (request, response) => {
  try {
    const { id } = request.params;
    const data = await AltcoinModel.findById(id);
    response.send(data);
  } catch (error) {
    response.status(500).send(error);
  }
});
app.put("/update_AltcoinNews/:id", async (request, response) => {
  const { id } = request.params;

  console.log('650', id, request.body)

  try {
    const data = await AltcoinModel.findByIdAndUpdate(id,
      {
        $set: request.body
      }

      , { new: true });//respons update data
    //response.send(product);
    response.json(data);
  }
  catch (e) {
    response.status(500).send(e);
  }
});
app.put("/update_AltcoinNewsByTitle/:title", async (request, response) => {
  const { title } = request.params;

  console.log('299', title, request.body)
   try {
    const data = await AltcoinModel.updateOne({title:title},
      {
        $set: request.body
      }

      , { new: true });//respons update data
    //response.send(product);
    response.json(data);
  }
  catch (e) {
    response.status(500).send(e);
  }
});
app.delete("/delete_AltcoinNews/:id", async (request, response) => {
  try {
    const processor = await AltcoinModel.findByIdAndDelete(request.params.id);

    if (!processor) response.status(404).send("No item found");
    response.status(200).send();
  } catch (error) {
    response.status(500).send(error);
  }
});
///////////////////////////////////NftNews///////////////////////////////////////////////////////////////////
app.post("/add_NftNews", async (request, response) => {
  console.log('207', request.body)
  if(request.body.top){
    const top = new TopNewsModel(request.body);
    try {
      await top.save();
    } catch (error) {
      response.status(500).send(error);
    }
  }
  if(request.body.popular){
    const popular = new PopularNewsModel(request.body);
    try {
      await popular.save();
    } catch (error) {
      response.status(500).send(error);
    }
  }
  const data = new NftModel(request.body);
  try {
    await data.save();
    response.send(data);
  } catch (error) {
    response.status(500).send(error);
  }
});
app.get("/get_NftNews", async (request, response) => {
  try {
    let limit = request.query.limit
    const category = await NftModel.find({}).limit(limit).sort({ createdAt: -1 });
    response.send(category);
  } catch (error) {
    response.status(500).send(error);
  }
});
app.get("/get_NftNews/:slug", async (request, response) => {
  try {
    const { slug } = request.params;
    const data = await NftModel.findOne({slug:slug});
    response.send(data);
  } catch (error) {
    response.status(500).send(error);
  }
});
app.get("/get_NftNews/:id", async (request, response) => {
  try {
    const { id } = request.params;
    const data = await NftModel.findById(id);
    response.send(data);
  } catch (error) {
    response.status(500).send(error);
  }
});
app.put("/update_NftNews/:id", async (request, response) => {
  const { id } = request.params;

  console.log('743', id, request.body)

  try {
    const data = await NftModel.findByIdAndUpdate(id,
      {
        $set: request.body
      }

      , { new: true });//respons update data
    //response.send(product);
    response.json(data);
  }
  catch (e) {
    response.status(500).send(e);
  }
});
app.put("/update_NftNewsByTitle/:title", async (request, response) => {
  const { title } = request.params;

  console.log('299', title, request.body)
   try {
    const data = await NftModel.updateOne({title:title},
      {
        $set: request.body
      }

      , { new: true });//respons update data
    //response.send(product);
    response.json(data);
  }
  catch (e) {
    response.status(500).send(e);
  }
});
app.delete("/delete_NftNews/:id", async (request, response) => {
  try {
    const processor = await NftModel.findByIdAndDelete(request.params.id);

    if (!processor) response.status(404).send("No item found");
    response.status(200).send();
  } catch (error) {
    response.status(500).send(error);
  }
});
///////////////////////////////////RegulationNews///////////////////////////////////////////////////////////////////
app.post("/add_RegulationNews", async (request, response) => {
  console.log('207', request.body)
  if(request.body.top){
    const top = new TopNewsModel(request.body);
    try {
      await top.save();
    } catch (error) {
      response.status(500).send(error);
    }
  }
  if(request.body.popular){
    const popular = new PopularNewsModel(request.body);
    try {
      await popular.save();
    } catch (error) {
      response.status(500).send(error);
    }
  }
  const data = new RegulationModel(request.body);
  try {
    await data.save();
    response.send(data);
  } catch (error) {
    response.status(500).send(error);
  }
});
app.get("/get_RegulationNews", async (request, response) => {
  try {
    let limit = request.query.limit
    const category = await RegulationModel.find({}).limit(limit).sort({ createdAt: -1 });
    response.send(category);
  } catch (error) {
    response.status(500).send(error);
  }
});
app.get("/get_RegulationNews/:slug", async (request, response) => {
  
  try {
    const { slug } = request.params;
    const data = await RegulationModel.findOne({slug:slug});
    response.send(data);
  } catch (error) {
    response.status(500).send(error);
  }
});
app.get("/get_RegulationNews/:id", async (request, response) => {
  try {
    const { id } = request.params;
    const data = await RegulationModel.findById(id);
    response.send(data);
  } catch (error) {
    response.status(500).send(error);
  }
});
app.put("/update_RegulationNews/:id", async (request, response) => {
  const { id } = request.params;

  console.log('836', id, request.body)

  try {
    const data = await RegulationModel.findByIdAndUpdate(id,
      {
        $set: request.body
      }

      , { new: true });//respons update data
    //response.send(product);
    response.json(data);
  }
  catch (e) {
    response.status(500).send(e);
  }
});
app.put("/update_RegulationNewsByTitle/:title", async (request, response) => {
  const { title } = request.params;

  console.log('299', title, request.body)
   try {
    const data = await RegulationModel.updateOne({title:title},
      {
        $set: request.body
      }

      , { new: true });//respons update data
    //response.send(product);
    response.json(data);
  }
  catch (e) {
    response.status(500).send(e);
  }
});
app.delete("/delete_RegulationNews/:id", async (request, response) => {
  try {
    const processor = await RegulationModel.findByIdAndDelete(request.params.id);

    if (!processor) response.status(404).send("No item found");
    response.status(200).send();
  } catch (error) {
    response.status(500).send(error);
  }
});
///////////////////////////////////MetaverseNews///////////////////////////////////////////////////////////////////
app.post("/add_MetaverseNews", async (request, response) => {
  console.log('207', request.body)
  if(request.body.top){
    const top = new TopNewsModel(request.body);
    try {
      await top.save();
    } catch (error) {
      response.status(500).send(error);
    }
  }
  if(request.body.popular){
    const popular = new PopularNewsModel(request.body);
    try {
      await popular.save();
    } catch (error) {
      response.status(500).send(error);
    }
  }
  const data = new MetaverseModel(request.body);
  try {
    await data.save();
    response.send(data);
  } catch (error) {
    response.status(500).send(error);
  }
});
app.get("/get_MetaverseNews", async (request, response) => {
  try {
    let limit = request.query.limit
    const category = await MetaverseModel.find({}).limit(limit).sort({ createdAt: -1 });
    response.send(category);
  } catch (error) {
    response.status(500).send(error);
  }
});
app.get("/get_MetaverseNews/:slug", async (request, response) => {
  
  try {
    const { slug } = request.params;
    const data = await MetaverseModel.findOne({slug:slug});
    console.log(data)
    response.send(data);
  } catch (error) {
    response.status(500).send(error);
  }
});
app.get("/get_MetaverseNews/:id", async (request, response) => {
  try {
    const { id } = request.params;
    const data = await MetaverseModel.findById(id);
    response.send(data);
  } catch (error) {
    response.status(500).send(error);
  }
});
app.put("/update_MetaverseNews/:id", async (request, response) => {
  const { id } = request.params;

  console.log('836', id, request.body)

  try {
    const data = await MetaverseModel.findByIdAndUpdate(id,
      {
        $set: request.body
      }

      , { new: true });//respons update data
    //response.send(product);
    response.json(data);
  }
  catch (e) {
    response.status(500).send(e);
  }
});
app.put("/update_MetaverseNewsByTitle/:title", async (request, response) => {
  const { title } = request.params;

  console.log('299', title, request.body)
   try {
    const data = await MetaverseModel.updateOne({title:title},
      {
        $set: request.body
      }

      , { new: true });//respons update data
    //response.send(product);
    response.json(data);
  }
  catch (e) {
    response.status(500).send(e);
  }
});
app.delete("/delete_MetaverseNews/:id", async (request, response) => {
  try {
    const processor = await MetaverseModel.findByIdAndDelete(request.params.id);

    if (!processor) response.status(404).send("No item found");
    response.status(200).send();
  } catch (error) {
    response.status(500).send(error);
  }
});
///////////////////////////////////Top News//////////////////////////////////////////////////////////////
app.post("/add_TopNews", async (request, response) => {
  console.log('207', request.body)
  
  const top = new TopNewsModel(request.body);
  try {
    await top.save();
    response.send(top);
  } catch (error) {
    response.status(500).send(error);
  }
});
app.get("/get_TopNews", async (request, response) => {
  try {
    const data = await TopNewsModel.find({}).limit().sort({ createdAt: -1 });;
    response.send(data);
  } catch (error) {
    response.status(500).send(error);
  }
});
app.get("/get_TopNewsBySlug/:slug", async (request, response) => {
  try {
    const { slug } = request.params;
    const data = await TopNewsModel.findOne({slug:slug});
    console.log('997',data,slug)
    response.send(data);
  } catch (error) {
    response.status(500).send(error);
  }
});
app.delete("/delete_TopNews/:id", async (request, response) => {
  console.log('del top news')
  try {
    const data = await TopNewsModel.findByIdAndDelete(request.params.id);

    if (!data) response.status(404).send("No item found");
    response.status(200).send();
  } catch (error) {
    response.status(500).send(error);
  }
});
app.delete("/delete_TopNewsByTitle/:title", async (request, response) => {
  console.log('del top news')
  try {
    const data = await TopNewsModel.deleteOne({
      title:{ $gte: request.params.title }});

    if (!data) response.status(404).send("No item found");
    response.status(200).send();
  } catch (error) {
    response.status(500).send(error);
  }
});
///////////////////////////////////Popular News//////////////////////////////////////////////////////////////
app.post("/add_PopularNews", async (request, response) => {
  console.log('207', request.body)
  
  const top = new PopularNewsModel(request.body);
  try {
    await top.save();
    response.send(top);
  } catch (error) {
    response.status(500).send(error);
  }
});
app.get("/get_PopularNews", async (request, response) => {
  try {
    const data = await PopularNewsModel.find({}).limit().sort({ createdAt: -1 });
    response.send(data);
  } catch (error) {
    response.status(500).send(error);
  }
});
app.get("/get_PopularNewsBySlug/:slug", async (request, response) => {
  try {
    const { slug } = request.params;
    const data = await PopularNewsModel.findOne({slug:slug});
    response.send(data);
  } catch (error) {
    response.status(500).send(error);
  }
});
app.delete("/delete_PopularNews/:id", async (request, response) => {
  console.log('del top news')
  try {
    const data = await PopularNewsModel.findByIdAndDelete(request.params.id);

    if (!data) response.status(404).send("No item found");
    response.status(200).send();
  } catch (error) {
    response.status(500).send(error);
  }
});
app.delete("/delete_PopularNewsByTitle/:title", async (request, response) => {
  console.log('del popular news')
  try {
    const data = await PopularNewsModel.deleteOne({
      title:{ $gte: request.params.title }});

    if (!data) response.status(404).send("No item found");
    response.status(200).send();
  } catch (error) {
    response.status(500).send(error);
  }
});
///////////////////////////////////Feature///////////////////////////////////////////////////////////////////
app.post("/add_Feature", async (request, response) => {
  console.log('207', request.body)
  if(request.body.top){
    const top = new TopNewsModel(request.body);
    try {
      await top.save();
    } catch (error) {
      response.status(500).send(error);
    }
  }
  if(request.body.popular){
    const popular = new PopularNewsModel(request.body);
    try {
      await popular.save();
    } catch (error) {
      response.status(500).send(error);
    }
  }
  const data = new FeatureModel(request.body);
  try {
    await data.save();
    response.send(data);
  } catch (error) {
    response.status(500).send(error);
  }
});
app.get("/get_FeatureNews", async (request, response) => {
  try {
    let limit = request.query.limit
    const category = await FeatureModel.find({}).limit(limit).sort({ createdAt: -1 });
    response.send(category);
  } catch (error) {
    response.status(500).send(error);
  }
});
app.get("/get_FeatureNews/:slug", async (request, response) => {
  
  try {
    const { slug } = request.params;
    const data = await FeatureModel.findOne({slug:slug});
    console.log(data)
    response.send(data);
  } catch (error) {
    response.status(500).send(error);
  }
});
app.get("/get_Feature/:id", async (request, response) => {
  try {
    const { id } = request.params;
    const data = await FeatureModel.findById(id);
    response.send(data);
  } catch (error) {
    response.status(500).send(error);
  }
});
app.put("/update_Feature/:id", async (request, response) => {
  const { id } = request.params;

  console.log('1037', id, request.body)

  try {
    const data = await FeatureModel.findByIdAndUpdate(id,
      {
        $set: request.body
      }

      , { new: true });//respons update data
    //response.send(product);
    response.json(data);
  }
  catch (e) {
    response.status(500).send(e);
  }
});
app.put("/update_FeatureByTitle/:title", async (request, response) => {
  const { title } = request.params;

  console.log('299', title, request.body)
   try {
    const data = await FeatureModel.updateOne({title:title},
      {
        $set: request.body
      }

      , { new: true });//respons update data
    //response.send(product);
    response.json(data);
  }
  catch (e) {
    response.status(500).send(e);
  }
});
app.delete("/delete_Feature/:id", async (request, response) => {
  try {
    const processor = await FeatureModel.findByIdAndDelete(request.params.id);

    if (!processor) response.status(404).send("No item found");
    response.status(200).send();
  } catch (error) {
    response.status(500).send(error);
  }
});
///////////////////////////////////Opinion///////////////////////////////////////////////////////////////////
app.post("/add_Opinion", async (request, response) => {
  console.log('207', request.body)
  if(request.body.top){
    const top = new TopOpinionModel(request.body);
    try {
      await top.save();
    } catch (error) {
      response.status(500).send(error);
    }
  }
  if(request.body.popular){
    const popular = new PopularNewsModel(request.body);
    try {
      await popular.save();
    } catch (error) {
      response.status(500).send(error);
    }
  }
  const data = new OpinionModel(request.body);
  try {
    await data.save();
    response.send(data);
  } catch (error) {
    response.status(500).send(error);
  }
});
app.get("/get_OpinionNews", async (request, response) => {
  try {
    let limit = request.query.limit
    const category = await OpinionModel.find({}).limit(limit).sort({ createdAt: -1 });
    response.send(category);
  } catch (error) {
    response.status(500).send(error);
  }
});
app.get("/get_OpinionNews/:slug", async (request, response) => {
  
  try {
    const { slug } = request.params;
    const data = await OpinionModel.findOne({slug:slug});
    console.log(data)
    response.send(data);
  } catch (error) {
    response.status(500).send(error);
  }
});
app.get("/get_Opinion/:id", async (request, response) => {
  try {
    const { id } = request.params;
    const data = await OpinionModel.findById(id);
    response.send(data);
  } catch (error) {
    response.status(500).send(error);
  }
});
app.put("/update_Opinion/:id", async (request, response) => {
  const { id } = request.params;

  console.log('1130', id, request.body)

  try {
    const data = await OpinionModel.findByIdAndUpdate(id,
      {
        $set: request.body
      }

      , { new: true });//respons update data
    //response.send(product);
    response.json(data);
  }
  catch (e) {
    response.status(500).send(e);
  }
});
app.put("/update_OpinionByTitle/:title", async (request, response) => {
  const { title } = request.params;

  console.log('299', title, request.body)
   try {
    const data = await OpinionModel.updateOne({title:title},
      {
        $set: request.body
      }

      , { new: true });//respons update data
    //response.send(product);
    response.json(data);
  }
  catch (e) {
    response.status(500).send(e);
  }
});
app.delete("/delete_Opinion/:id", async (request, response) => {
  try {
    const processor = await OpinionModel.findByIdAndDelete(request.params.id);

    if (!processor) response.status(404).send("No item found");
    response.status(200).send();
  } catch (error) {
    response.status(500).send(error);
  }
});
///////////////////////////////////Followup///////////////////////////////////////////////////////////////////
app.post("/add_Followup", async (request, response) => {
  console.log('207', request.body)
  if(request.body.top){
    const top = new TopNewsModel(request.body);
    try {
      await top.save();
    } catch (error) {
      response.status(500).send(error);
    }
  }
  if(request.body.popular){
    const popular = new PopularNewsModel(request.body);
    try {
      await popular.save();
    } catch (error) {
      response.status(500).send(error);
    }
  }
  const data = new FollowupModel(request.body);
  try {
    await data.save();
    response.send(data);
  } catch (error) {
    response.status(500).send(error);
  }
});
app.get("/get_FollowupNews", async (request, response) => {
  try {
    let limit = request.query.limit
    const category = await FollowupModel.find({}).limit(limit).sort({ createdAt: -1 });
    response.send(category);
  } catch (error) {
    response.status(500).send(error);
  }
});
app.get("/get_FollowupNews/:slug", async (request, response) => {
  
  try {
    const { slug } = request.params;
    const data = await FollowupModel.findOne({slug:slug});
    console.log(data)
    response.send(data);
  } catch (error) {
    response.status(500).send(error);
  }
});
app.get("/get_Followup/:id", async (request, response) => {
  try {
    const { id } = request.params;
    const data = await FollowupModel.findById(id);
    response.send(data);
  } catch (error) {
    response.status(500).send(error);
  }
});
app.put("/update_Followup/:id", async (request, response) => {
  const { id } = request.params;

  console.log('1223', id, request.body)

  try {
    const data = await FollowupModel.findByIdAndUpdate(id,
      {
        $set: request.body
      }

      , { new: true });//respons update data
    //response.send(product);
    response.json(data);
  }
  catch (e) {
    response.status(500).send(e);
  }
});
app.put("/update_FollowupByTitle/:title", async (request, response) => {
  const { title } = request.params;

  console.log('299', title, request.body)
   try {
    const data = await FollowupModel.updateOne({title:title},
      {
        $set: request.body
      }

      , { new: true });//respons update data
    //response.send(product);
    response.json(data);
  }
  catch (e) {
    response.status(500).send(e);
  }
});
app.delete("/delete_Followup/:id", async (request, response) => {
  try {
    const processor = await FollowupModel.findByIdAndDelete(request.params.id);

    if (!processor) response.status(404).send("No item found");
    response.status(200).send();
  } catch (error) {
    response.status(500).send(error);
  }
});
///////////////////////////////////Markets///////////////////////////////////////////////////////////////////
app.post("/add_Markets", async (request, response) => {
  console.log('207', request.body)
  if(request.body.top){
    const top = new TopNewsModel(request.body);
    try {
      await top.save();
    } catch (error) {
      response.status(500).send(error);
    }
  }
  if(request.body.popular){
    const popular = new PopularNewsModel(request.body);
    try {
      await popular.save();
    } catch (error) {
      response.status(500).send(error);
    }
  }
  const data = new MarketsModel(request.body);
  try {
    await data.save();
    response.send(data);
  } catch (error) {
    response.status(500).send(error);
  }
});
app.get("/get_MarketsNews", async (request, response) => {
  try {
    let limit = request.query.limit
    const category = await MarketsModel.find({}).limit(limit).sort({ createdAt: -1 });
    response.send(category);
  } catch (error) {
    response.status(500).send(error);
  }
});
app.get("/get_MarketsNews/:slug", async (request, response) => {
  
  try {
    const { slug } = request.params;
    const data = await MarketsModel.findOne({slug:slug});
    console.log(data)
    response.send(data);
  } catch (error) {
    response.status(500).send(error);
  }
});
app.get("/get_Markets/:id", async (request, response) => {
  try {
    const { id } = request.params;
    const data = await MarketsModel.findById(id);
    response.send(data);
  } catch (error) {
    response.status(500).send(error);
  }
});
app.put("/update_Markets/:id", async (request, response) => {
  const { id } = request.params;

  console.log('1316', id, request.body)

  try {
    const data = await MarketsModel.findByIdAndUpdate(id,
      {
        $set: request.body
      }

      , { new: true });//respons update data
    //response.send(product);
    response.json(data);
  }
  catch (e) {
    response.status(500).send(e);
  }
});
app.put("/update_MarketsByTitle/:title", async (request, response) => {
  const { title } = request.params;

  console.log('299', title, request.body)
   try {
    const data = await MarketsModel.updateOne({title:title},
      {
        $set: request.body
      }

      , { new: true });//respons update data
    //response.send(product);
    response.json(data);
  }
  catch (e) {
    response.status(500).send(e);
  }
});
app.delete("/delete_Markets/:id", async (request, response) => {
  try {
    const processor = await MarketsModel.findByIdAndDelete(request.params.id);

    if (!processor) response.status(404).send("No item found");
    response.status(200).send();
  } catch (error) {
    response.status(500).send(error);
  }
});
///////////////////////////////////DescriptionCoin///////////////////////////////////////////////////////////////////
app.post("/add_DescriptionCoin", async (request, response) => {
  console.log('207', request.body)
  if(request.body.top){
    const top = new DescriptionCoinModel(request.body);
    try {
      await top.save();
    } catch (error) {
      response.status(500).send(error);
    }
  }
  if(request.body.popular){
    const popular = new DescriptionCoinModel(request.body);
    try {
      await popular.save();
    } catch (error) {
      response.status(500).send(error);
    }
  }
  const data = new DescriptionCoinModel(request.body);
  try {
    await data.save();
    response.send(data);
  } catch (error) {
    response.status(500).send(error);
  }
});
app.get("/get_DescriptionCoin", async (request, response) => {
  try {
    const category = await DescriptionCoinModel.find({});
    response.send(category);
  } catch (error) {
    response.status(500).send(error);
  }
});
app.get("/get_DescriptionCoin/:category", async (request, response) => {
  try {
    const { id } = request.params;
    const data = await DescriptionCoinModel.find({ 'category': request.params.category });
    response.send(data);
  } catch (error) {
    response.status(500).send(error);
  }
});
app.get("/get_DescriptionCoinById/:id", async (request, response) => {
  try {
    const { id } = request.params;
    const data = await DescriptionCoinModel.findById(id);
    response.send(data);
  } catch (error) {
    response.status(500).send(error);
  }
});
app.put("/update_DescriptionCoin/:id", async (request, response) => {
  const { id } = request.params;

  console.log('1316', id, request.body)

  try {
    const data = await DescriptionCoinModel.findByIdAndUpdate(id,
      {
        $set: request.body
      }

      , { new: true });//respons update data
    //response.send(product);
    response.json(data);
  }
  catch (e) {
    response.status(500).send(e);
  }
});
app.put("/update_DescriptionCoinByTitle/:title", async (request, response) => {
  const { title } = request.params;

  console.log('299', title, request.body)
   try {
    const data = await DescriptionCoinModel.updateOne({title:title},
      {
        $set: request.body
      }

      , { new: true });//respons update data
    //response.send(product);
    response.json(data);
  }
  catch (e) {
    response.status(500).send(e);
  }
});
app.delete("/delete_DescriptionCoin/:id", async (request, response) => {
  try {
    const processor = await DescriptionCoinModel.findByIdAndDelete(request.params.id);

    if (!processor) response.status(404).send("No item found");
    response.status(200).send();
  } catch (error) {
    response.status(500).send(error);
  }
});
///////////////////////////////////Learn///////////////////////////////////////////////////////////////////
app.post("/add_Learn", async (request, response) => {
  console.log('207', request.body)
  if(request.body.top){
    const top = new TopNewsModel(request.body);
    try {
      await top.save();
    } catch (error) {
      response.status(500).send(error);
    }
  }
  if(request.body.popular){
    const popular = new PopularNewsModel(request.body);
    try {
      await popular.save();
    } catch (error) {
      response.status(500).send(error);
    }
  }
  const data = new LearnModel(request.body);
  try {
    await data.save();
    response.send(data);
  } catch (error) {
    response.status(500).send(error);
  }
});
app.get("/get_LearnNews", async (request, response) => {
  try {
    const category = await LearnModel.find({});
    response.send(category);
  } catch (error) {
    response.status(500).send(error);
  }
});
app.get("/get_LearnNews/:slug", async (request, response) => {
  
  try {
    const { slug } = request.params;
    const data = await LearnModel.findOne({slug:slug});
    console.log(data)
    response.send(data);
  } catch (error) {
    response.status(500).send(error);
  }
});
app.get("/get_Learn/:id", async (request, response) => {
  try {
    const { id } = request.params;
    const data = await LearnModel.findById(id);
    response.send(data);
  } catch (error) {
    response.status(500).send(error);
  }
});
app.put("/update_Learn/:id", async (request, response) => {
  const { id } = request.params;

  console.log('1409', id, request.body)

  try {
    const data = await LearnModel.findByIdAndUpdate(id,
      {
        $set: request.body
      }

      , { new: true });//respons update data
    //response.send(product);
    response.json(data);
  }
  catch (e) {
    response.status(500).send(e);
  }
});
app.put("/update_LearnByTitle/:title", async (request, response) => {
  const { title } = request.params;

  console.log('299', title, request.body)
   try {
    const data = await LearnModel.updateOne({title:title},
      {
        $set: request.body
      }

      , { new: true });//respons update data
    //response.send(product);
    response.json(data);
  }
  catch (e) {
    response.status(500).send(e);
  }
});
app.delete("/delete_Learn/:id", async (request, response) => {
  try {
    const processor = await LearnModel.findByIdAndDelete(request.params.id);

    if (!processor) response.status(404).send("No item found");
    response.status(200).send();
  } catch (error) {
    response.status(500).send(error);
  }
});
///////////////////////////////////Message & Email///////////////////////////////////////////////////////////////////
app.post("/add_message", async (request, response) => {
   try {
    const data = new MessageModel(request.body);
    await data.save();
    response.send(data);
  } catch (error) {
    response.status(500).send(error);
  }
});
app.post("/add_email", async (request, response) => {
  try {
    console.log(request.body)
    const data = new EmailModel(request.body);
    await data.save();
    response.send(data);
  } catch (error) {
    response.status(500).send(error);
  }
});
///////////////////////////////////////// crypto data api //////////////////////////////////////////////
///////////////////////////////////////// crypto data api //////////////////////////////////////////////
app.get("/get_allCoin", async (request, response) => {
  try {
  coinstatsopenapi.auth(process.env.COINSTATSOPENAPI);
  coinstatsopenapi.getCoins()
  .then(({ data }) =>{
    response.send(data);
  })
  .catch(err => console.error(err));
  } catch (error) {
    response.status(500).send(error);
  }
});
app.get("/get_CoinById/:id", async (request, response) => {
  try {
    const { id } = request.params;
    coinstatsopenapi.auth(process.env.COINSTATSOPENAPI);
    coinstatsopenapi.getCoinById({coinId: id})
   .then(({ data }) =>{
    response.send(data);
  })
  .catch(err => console.error(err));
  } catch (error) {
    response.status(500).send(error);
  }
});
app.get("/get_CoinAllMarkets/:id", async (request, response) => {
  try {
    const { id } = request.params;
    coinstatsopenapi.auth(process.env.COINSTATSOPENAPI);
    coinstatsopenapi.getCoinById({coinId: id})
  .then(({ data }) =>{
    response.send(data);
  })
  .catch(err => console.error(err));
  } catch (error) {
    response.status(500).send(error);
  }
});
app.get("/get_CoinChart/:id", async (request, response) => {
  try {
    const { id } = request.params;
    coinstatsopenapi.auth(process.env.COINSTATSOPENAPI);
    coinstatsopenapi.getCoinChartById({period: 'all', coinId: id})
  .then(({ data }) =>{
    response.send(data);
  })
  .catch(err => console.error(err));
  } catch (error) {
    response.status(500).send(error);
  }
});
///////////////////////////////////Footer///////////////////////////////////////////////////////////////////
app.post("/add_Footer", async (request, response) => {
  const data = new FooterModel(request.body);
  console.log('437', request.body)
  try {
    await data.save();
    response.send(data);
  } catch (error) {
    response.status(500).send(error);
  }
});
app.get("/get_Footer", async (request, response) => {
  const data = await FooterModel.find({});

  try {
    response.send(data);
  } catch (error) {
    response.status(500).send(error);
  }
});
app.put("/update_Footer/:id", async (request, response) => {
  const { id } = request.params;

  console.log(id, request.body)

  try {
    const data = await FooterModel.findByIdAndUpdate(id,

      { $set: request.body }

      , { new: true });//respons update data
    //response.send(product);
    response.json(data);
  }
  catch (e) {
    response.status(500).send(e);
  }
});
app.delete("/delete_Footer/:id", async (request, response) => {
  try {
    const data = await FooterModel.findByIdAndDelete(request.params.id);

    if (!data) response.status(404).send("No item found");
    response.status(200).send();
  } catch (error) {
    response.status(500).send(error);
  }
});
///////////////////////////////////////Email//////////////////////////////////////////////////////////////
app.post("/createEmailRegisterClient", async (request, response) => {
  const clientEmail = new ClientEmailModel(request.body);
  console.log('clientEmail', request.body)
  try {
    await clientEmail.save();
    response.send(clientEmail);
  } catch (error) {
    response.status(500).send(error);
  }
});
app.get('/getEmail/:email', async (request, response) => {
  console.log(request.params)
  const clientEmail = await ClientEmailModel.find({ 'email': request.params.email });
  try {
    response.send(clientEmail);
  } catch (error) {
    response.status(500).send(error);
  }
});
app.delete("/delete_email/:email", async (request, response) => {
  console.log('445,', request.query.id)

  const clientEmail = await ClientEmailModel.deleteMany({ 'email': request.params.email });
  try {
    response.send(clientEmail);
  } catch (error) {
    response.status(500).send(error);
  }
});
////////////////////////////////////////ClientBox/////////////////////////////////////////////////////////////
app.post("/createClientBox", async (request, response) => {
  const ClientBox = new ClientBoxModel(request.body);
  // console.log('clientEmail',request.body)
  try {
    await ClientBox.save();
    response.send(ClientBox);
  } catch (error) {
    response.status(500).send(error);
  }
});
app.get('/getClientBox/:firebaseId', async (request, response) => {
  const clientEmail = await ClientBoxModel.find({ '_uidFirebase': request.params.firebaseId });
  try {
    response.send(clientEmail);
  } catch (error) {
    response.status(500).send(error);
  }
});
app.get('/getClientBox/', async (request, response) => {
  const clientEmail = await ClientBoxModel.find();
  try {
    response.send(clientEmail);
  } catch (error) {
    response.status(500).send(error);
  }
});
app.put("/updateClientBox/:id", async (request, response) => {
  const { id } = request.params;

  console.log('477', id, request.body)

  try {
    const ClientBox = await ClientBoxModel.findByIdAndUpdate(id,

      { _profil: request.body }

      , { new: true });//respons update data
    //response.send(product);
    response.json(ClientBox);
  }
  catch (e) {
    response.status(500).send(e);
  }
});
app.put("/updateClientBoxAddAnimals/:id", async (request, response) => {
  const { id } = request.params;

  console.log('563', id, request.body)

  try {
    const ClientBox = await ClientBoxModel.updateOne({ _id: id },

      { $push: { _animals: { $each: [request.body] } } }

      , { new: true });//respons update data
    //response.send(product);
    response.json(ClientBox);
  }
  catch (e) {
    response.status(500).send(e);
  }
});
app.put("/updateClientBoxUpdateAnimals/:id", async (request, response) => {
  const { id } = request.params;

  console.log('581', id, request.body)

  try {
    const ClientBox = await ClientBoxModel.findByIdAndUpdate({ _id: id },

      { _animals: request.body }

      , { new: true });//respons update data
    //response.send(product);
    response.json(ClientBox);
  }
  catch (e) {
    response.status(500).send(e);
  }
});
app.put("/updateClientBoxUpdateProfile/:id", async (request, response) => {
  const { id } = request.params;

  console.log('599', id, request.body)

  try {
    const ClientBox = await ClientBoxModel.findByIdAndUpdate(id,

      { _profil: request.body }

      , { new: true });//respons update data
    //response.send(product);
    response.json(ClientBox);
  }
  catch (e) {
    response.status(500).send(e);
  }
});
app.put("/updateClientBoxAddAnimalsFireBAseId/:firebaseId", async (request, response) => {
  const { id } = request.params;

  console.log('563', id, request.body)

  try {
    const ClientBox = await ClientBoxModel.updateOne({ '_uidFirebase': request.params.firebaseId },

      { _animals: request.body }

      , { new: true });//respons update data
    //response.send(product);
    response.json(ClientBox);
  }
  catch (e) {
    response.status(500).send(e);
  }
});
app.delete("/deleteClientBox/:id", async (request, response) => {
  console.log(request.params)
  const ClientBox = await ClientBoxModel.deleteMany({ '_id': request.params.id });;
  // console.log('clientEmail',request.body)
  try {
    response.send(ClientBox);
  } catch (error) {
    response.status(500).send(error);
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////







module.exports = app;