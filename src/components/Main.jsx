import React from 'react'
import Form from './Form'

function Main() {
    return (
        <div className="min-h-screen ">
            <div className="flex flex-col py-20 px-10">
                <div className="col-span-10 lg:col-span-10 md:col-span-8 sm:col-span-11">
                    <div className="flex flex-col lg:flex-row">
                        <div className="bg-gray-500 lg:w-4/12 p-10">
                            <h2 className="text-3xl font-bold">Merlynn - Coding Assessment</h2>
                        </div>
                        <div className="bg-gray-300 text-gray-900 lg:w-8/12 p-5 ">
                            <Form />
                        </div>
                    </div>

                    <div className="row d-flex flex-column">
                        <div className="col-lg-10 col-md-8 col-sm-11">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main