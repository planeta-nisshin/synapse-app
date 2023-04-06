import React, { useEffect, useState } from 'react'
import Footer from './Footer'
import Header from './Header'
import { ReactNode } from 'react'
import Bottom_bt from './Bottom_bt'
import Head from 'next/head'
import Sidbt from './Sidbt'

const Layout = ({ children }: {
    children: ReactNode
}) => {
    return (
        <>
            <Head>
            </Head>
            <Header />
            {children}
            <Footer />
        </>
    )
}

export default Layout