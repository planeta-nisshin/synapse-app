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
                <meta name="description" content="シナップスは、神経系の発達が著しい6ヶ月の赤ちゃんから3歳までの乳幼児対象の知育体育スクール。最新の心理学と運動発達学に基づき、プールと知育体操で40年以上の指導実績のある平針スイミングスクールが運営しています。" />
            </Head>
            <Header />
            {children}
            <Footer />
        </>
    )
}

export default Layout