import Skill from "./skill";

// images 
import Javascriptimg from "../../src/skillimgs/jsimg.png";
import Typescriptimg from "../../src/skillimgs/tsimg.png";
import Pythonimg from "../../src/skillimgs/pyimg.png";
// import reactimg from "../../src/skillimgs/reactimg.png";
import nodejsimg from "../../src/skillimgs/nodeimg.png";
import ExpressJsimg from "../../src/skillimgs/express.png";
import Nestjsimg from "../../src/skillimgs/nest.png";
import Tailwindimg from "../../src/skillimgs/tailwind.png";
import ShadCNimg from "../../src/skillimgs/shadecn.png";
import PostgreSQLimg from "../../src/skillimgs/postsql.png";
import Sequelizeimg from "../../src/skillimgs/sequelize.png";
import MongoDBimg from "../../src/skillimgs/mongo.png";
import Mongooseimg from "../../src/skillimgs/monguse.png";
import Firebaseimg from "../../src/skillimgs/firebase.png";
import Appwriteimg from "../../src/skillimgs/appwrite.png";
import Cybersecurityimg from "../../src/skillimgs/cyber.png";
import Webapplicationsecurityimg from "../../src/skillimgs/webappsecu.png";
import Reduximg from "../../src/skillimgs/redux.png";
import RESETAPIimg from "../../src/skillimgs/restapi.png";
import CSSimg from "../../src/skillimgs/css.png";
import HTMLimg from "../../src/skillimgs/html.png";
import Gitimg from "../../src/skillimgs/git.png";
import Gitubimg from "../../src/skillimgs/github.png";
import vscodeimg from "../../src/skillimgs/vscode.png";
import Linuximg from "../../src/skillimgs/linux.png";
// import Dockerimg from "../../src/skillimgs/docker.png";
import Virtualizationimg from "../../src/skillimgs/virtualization.png";
// import Postmanimg from "../../src/skillimgs/postman.png";
import Teachingimg from "../../src/skillimgs/teaching.png";
import contentcreaterimg from "../../src/skillimgs/contentcreater.png";




let Techskillmain = () => {
    return (
        <div className="maintech min-h-screen  mt-12">
            <div className="text-center mb-12 h-16">
                <h1 className="md:text-5xl font-bold text-white opacity-80 text-[40px]">Technical skills</h1>
            </div>

            <div className="Allskill  ">
                <div className="firstrow flex md:justify-between justify-center ml-4 mr-4 md:h-[7rem]  flex-wrap ">
                    <Skill heading="Javascript" image={Javascriptimg}></Skill>
                    <Skill heading="Typescript" image={Typescriptimg}></Skill>
                    <Skill heading="Python" image={Pythonimg}></Skill>
                </div>

                <div className="secondrow flex md:justify-between justify-center ml-4 mr-4 md:h-[7rem] md:mt-[50px] md:flex-nowrap flex-wrap">
                    <Skill heading="React Js" image={Pythonimg}></Skill>
                    <Skill heading="Node Js" image={nodejsimg}></Skill>
                    <Skill heading="Express Js" image={ExpressJsimg}></Skill>
                </div>

                <div className="thirdrow flex md:justify-between justify-center ml-4 mr-4 md:h-[7rem] md:mt-[50px] md:flex-nowrap flex-wrap">
                    <Skill heading="Nest Js" image={Nestjsimg}></Skill>
                    <Skill heading="Tailwind CSS" image={Tailwindimg}></Skill>
                    <Skill heading="Shad CN" image={ShadCNimg}></Skill>
                </div>

                <div className="fourthrow flex md:justify-between justify-center ml-4 mr-4 md:h-[7rem] md:mt-[50px] md:flex-nowrap flex-wrap">
                    <Skill heading="Postgre SQL" image={PostgreSQLimg}></Skill>
                    <Skill heading="Sequelize" image={Sequelizeimg}></Skill>
                    <Skill heading="MongoDB" image={MongoDBimg}></Skill>
                </div>

                <div className="fifthrow flex md:justify-between justify-center ml-4 mr-4 md:h-[7rem] md:mt-[50px] md:flex-nowrap flex-wrap">
                    <Skill heading="Mongoose" image={Mongooseimg}></Skill>
                    <Skill heading="Firebase" image={Firebaseimg}></Skill>
                    <Skill heading="Appwrite" image={Appwriteimg}></Skill>
                </div>

                <div className="sixthrow flex md:justify-between justify-center ml-4 mr-4 md:h-[7rem] md:mt-[50px] md:flex-nowrap flex-wrap">
                    <Skill heading="Cyber security" image={Cybersecurityimg}></Skill>
                    <Skill heading="Web application security" image={Webapplicationsecurityimg}></Skill>
                    <Skill heading="Redux" image={Reduximg}></Skill>
                </div>

                <div className="seventhrow flex md:justify-between justify-center ml-4 mr-4 md:h-[7rem] md:mt-[50px] md:flex-nowrap flex-wrap">
                    <Skill heading="RESET API" image={RESETAPIimg}></Skill>
                    <Skill heading="CSS" image={CSSimg}></Skill>
                    <Skill heading="HTML" image={HTMLimg}></Skill>
                </div>

                <div className="eightrow flex md:justify-between justify-center ml-4 mr-4 md:h-[7rem] md:mt-[50px] md:flex-nowrap flex-wrap">
                    <Skill heading="Git" image={Gitimg}></Skill>
                    <Skill heading="Gitub" image={Gitubimg}></Skill>
                    <Skill heading="Vs code" image={vscodeimg}></Skill>
                </div>

                <div className="ninethrow flex md:justify-between justify-center ml-4 mr-4 md:h-[7rem] md:mt-[50px] md:flex-nowrap flex-wrap">
                    <Skill heading="Linux" image={Linuximg}></Skill>
                    <Skill heading="Docker" image={Pythonimg}></Skill>
                    <Skill heading="Virtualization" image={Virtualizationimg}></Skill>
                </div>

                <div className="tenth flex md:justify-between justify-center ml-4 mr-4 md:h-[7rem] md:mt-[50px] md:flex-nowrap flex-wrap">
                    <Skill heading="Postman" image={Pythonimg}></Skill>
                    <Skill heading="Teaching" image={Teachingimg}></Skill>
                    <Skill heading="Content Creation" image={contentcreaterimg}></Skill>
                </div>
            </div>
        </div>
    )
}

export default Techskillmain;
