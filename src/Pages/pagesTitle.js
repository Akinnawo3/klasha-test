import React from 'react'

const PagesTitle = ({
    title
}) => {
    return (
        <>
            <div>
                <h2 className="m-0 mt-3 ms-4">
                    <b>
                        {title}
                    </b>
                </h2>
            </div>
            <hr className="m-0" />
        </>
    )
}

export default PagesTitle
