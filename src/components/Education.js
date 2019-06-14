import React from 'react';
import {Toast, ToastBody, ToastHeader} from 'reactstrap';

function Education() {
    return (
        <div className="educationToast">
            <Toast>
                <ToastHeader>
                    Northeastern University, MS Computer Science (Sept 2017 – May 2019)
                </ToastHeader>
                <ToastBody>
                    Supervised and graded practical work, advised students on lab sessions, assignments and projects. Automated the grading process.
                </ToastBody>
            </Toast>

            <Toast>
                <ToastHeader>
                    VTU, BE Computer Science (Sept 2011 – July 2015)
                </ToastHeader>
                <ToastBody>
                    Supervised and graded practical work, advised students on lab sessions, assignments and projects. Automated the grading process.
                </ToastBody>
            </Toast>
        </div>
    );
}

export default Education;
