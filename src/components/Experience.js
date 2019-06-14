import React from 'react';
import {Toast, ToastBody, ToastHeader} from 'reactstrap';

function Experience() {
    return (
        <div className="experienceToast">
            <Toast>
                <ToastHeader>
                    Northeastern University, TA, Computer Systems (Jan 2019 – May 2019)
                </ToastHeader>
                <ToastBody>
                    Supervised and graded practical work, advised students on lab sessions, assignments and projects. Automated the grading process.
                </ToastBody>
            </Toast>

            <Toast>
                <ToastHeader>
                    Riivos (May 2018 - Dec 2018)
                </ToastHeader>
                <ToastBody>
                        <li>Developed an ETL system to read data from different external data sources and display on the
                            front end.
                        </li>
                        <li>Built new UI features using AngularJS, C3.js, Bootstrap, HTML5 and CSS3 and Kendo UI.</li>
                        <li>Built micro services using Websockets, Node.js, RxJs, ETCD, Cassandra, Elastic Search and
                            AWS.
                        </li>
                        <li>Core member of the development team, instrumental in executing out various tasks of the
                            product development cycle including story
                            creation, application development, bugs triage and resolution, conducting demos to external
                            stakeholders.
                        </li>
                        <li>Advocated and implemented the use of eslint and prettier for consistent styling and
                            formatting across the codebase.
                        </li>
                </ToastBody>
            </Toast>

            <Toast>
                <ToastHeader>
                    Northeastern University, TA, Web Development (Jan 2018 – May 2018)
                </ToastHeader>
                <ToastBody>
                    <li>Aid in course content development. Coursework covers the MEAN stack, OAuth and Heroku.</li>
                    <li>Responsibilities include grading students, troubleshooting issues, resolving queries and conducting weekly code walks.</li>
                </ToastBody>
            </Toast>

            <Toast>
                <ToastHeader>
                    ThoughtWorks (Aug 2015 – Aug 2017)
                </ToastHeader>
                <ToastBody>
                    <li>Developed a responsive mobile web application using React.js and C# APIs. Implemented using the following technologies - Rake, NPM, Webpack, Omniture, DTM, New Relic, Chef, TeamCity and AWS. The enhanced
                        application enhanced usability, reduced friction for the end user thereby increasing sales by 30 percent.</li>
                        <li>Streamlined and automated internal procurement process. Tech stack included GAS, HTML5, CSS, JavaScript and JQuery.</li>
                        <li>Designed and pitched a Facebook chatbot for ordering train tickets using Wit.ai and Facebook messenger APIs.</li>
                        <li>Advocated and trained internal and external stakeholders on the use of continuous delivery, agile and test-driven development.</li>
                </ToastBody>
            </Toast>
        </div>
    );
}

export default Experience;
