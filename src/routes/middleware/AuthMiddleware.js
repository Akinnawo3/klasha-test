import React from 'react'

const AuthMiddleware = ({
    layout: Layout,
    component: Component
}) => {

    return (
        <Layout>
            <Component />
        </Layout>

    )
}

export default AuthMiddleware
