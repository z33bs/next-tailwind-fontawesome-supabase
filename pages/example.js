import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSmile} from "@fortawesome/free-solid-svg-icons";
import {faGithub} from "@fortawesome/free-brands-svg-icons";

function Example({session, supabaseClient}) {
    return (
        <div>
            <main>
                <div className="flex justify-between">
                    <h1 className="text-3xl font-bold underline flex items-center">
                        Session passed looks like this <FontAwesomeIcon icon={faGithub} className="h-14 p-3"/>:
                    </h1>
                    <div>
                        <button className="bg-gray-500 p-3 mr-3" onClick={() => supabaseClient.auth.signOut()}>
                            Sign Out
                        </button>
                    </div>
                </div>
                <pre>{JSON.stringify(session, null, 2)}</pre>
                <FontAwesomeIcon icon={faSmile} className="h-14"/>

            </main>
        </div>
    );
}

export default Example;