'use client'
import React, { useEffect } from 'react';

const WhatsappWidgetKumarkom = () => {
    useEffect(() => {
        const url = 'https://dev2-wati-integration-service.clare.ai/ShopifyWidget/shopifyWidget.js?61989';
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.async = true;
        script.src = url;

        const options = {
            enabled: true,
            chatButtonSetting: {
                backgroundColor: '#00e785',
                ctaText: 'Chat with us',
                borderRadius: '25',
                marginLeft: '0',
                marginRight: '20',
                marginBottom: '20',
                ctaIconWATI: false,
                position: 'right',
            },
            brandSetting: {
                brandName: 'THE ZURI HOTELS',
                brandSubTitle: 'The Zuri Kumarakom, Kerala <br> Mon - Sat (10am - 6pm)',
                brandImg: 'https://www.wati.io/wp-content/uploads/2023/04/Wati-logo.svg',
                welcomeText: 'Hi there!\nHow can I help you?',
                messageText: 'Hello, %0A I have an enquiry about {{page_link}} ',
                backgroundColor: '#800080',
                ctaText: 'Chat with us',
                borderRadius: '25',
                autoShow: false,
                phoneNumber: '919946105513',
            },
        };

        script.onload = () => {
            try {
                window.CreateWhatsappChatWidget(options);
            } catch (error) {
                console.error('Error initializing WhatsApp widget:', error);
            }
        };

        script.onerror = (error) => {
            console.error('Error loading WhatsApp widget script:', error);
        };

        document.head.appendChild(script);

        return () => {
            // Cleanup script when component unmounts
            document.head.removeChild(script);
        };
    }, []);

    return <div></div>;
};

export default WhatsappWidgetKumarkom;
