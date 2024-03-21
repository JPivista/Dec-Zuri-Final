'use client'
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { Col, Container } from 'react-bootstrap'

const PrivacyPolicyContent = () => {

    const [domainName, setDomainName] = useState('');

    useEffect(() => {
        setDomainName(window.location.hostname);
    })

    // const pathname = window.location.pathname;

    return (
        <>
            <Container className='custom-kumarkom-menu-container'>

                <Col className='text-center pb-3'>
                    <h3 className='text-custom-grey'>
                        PRIVACY POLICY
                    </h3>
                </Col>

                <h6>INTRODUCTION :</h6>
                <p>
                    Zuri Hotels and Resorts respects your privacy, and is committed to protecting the privacy, confidentiality and security of the personal data you provide to us or that we collect about you when you use our website <Link href="/" className='text-black text-decoration-none'>{domainName}</Link> or our mobile application and other online products and services (“Site”), when you contact guest services, or when you otherwise interact with us. We are aware of our responsibilities to protect your personal data, to keep it secure and comply with applicable privacy and data protection laws.
                </p>

                <p>
                    This Privacy Policy explains our personal data practices and the choices you can make about the way your personal data is used. This Privacy Policy gives effect to our commitment to protect your personal data and serves as the guidelines to be observed by all of the hotels, resorts and properties managed and/or operated by Zuri Hotels and Resorts or its affiliates.
                </p>

                <p>
                    You will be asked to consent to the terms of this Privacy Policy when making a reservation, joining loyalty programs, registering for events or promotions or otherwise corresponding with us via the Site or otherwise where required under applicable law.
                </p>

                <p>
                    Zuri Hotels and Resorts (a data protection officer (Email) dpo@thezurihotels.com (Address) #244, Hoody Village, Rajapalya, ITPL Road, Whitefield, Bengaluru – 560 048, India is responsible for using your personal data
                </p>


                <h6>TYPES OF PERSONAL DATA WE COLLECT</h6>
                <p>
                    Information you provide to us: we collect personal data (including where applicable sensitive personal data) you provide directly to us. This includes:
                </p>
                <ul>
                    <li>
                        <p className='mb-0'>
                            your full name and contact information, passport and visa information;
                        </p>
                    </li>
                    <li>
                        <p className='mb-0'>
                            guest stay information, including the hotels where you have stayed, date of arrival and departure, goods and services purchased, special requests made, your service preferences, telephone numbers dialed and email, faxes, telephone and other messages received;
                        </p>
                    </li>
                    <li>
                        <p className='mb-0'>
                            Important dates, such as birthdays, anniversaries and special occasions;
                        </p>
                    </li>
                    <li>
                        <p className='mb-0'>
                            your credit / debit card, mobile payment and other payment details;
                        </p>
                    </li>
                    <li>
                        <p className='mb-0'>
                            your membership information, account details, profile or password details and any frequent flyer or travel partner program affiliation;
                        </p>
                    </li>
                    <li>
                        <p className='mb-0'>
                            any information necessary to fulfill special requests (for example, leisure, travel and guest preferences);
                        </p>
                    </li>
                    <li>
                        <p className='mb-0'>
                            your reviews, feedback and opinions about our hotels, resorts, programs and services;
                        </p>
                    </li>
                    <li>
                        <p className='mb-0'>
                            information collected through the use of closed circuit television systems and other security systems; and
                            Any other personal data you choose to provide to us.
                        </p>
                    </li>
                    <li>
                        <p className='mb-0'>
                            For limited purposes, we collect and retain images via security cameras located in public areas, such as hallways, lobbies, etc., in our properties.
                        </p>
                    </li>
                </ul>
                <h6>
                    INFORMATION WE COLLECT AUTOMATICALLY WHEN YOU USE THE SITE:WHEN YOU ACCESS OR USE THE SITE, WE AUTOMATICALLY COLLECT PERSONAL DATA ABOUT YOU, INCLUDING:
                </h6>
                <ul>
                    <li>
                        <p className='mb-0'>
                            <span className='fw-bolder'>Log Information: </span> we may collect system log information about your use of the Site, including the type of browser you use, access times, pages viewed, your IP address and the page you visited before navigating to our Site.
                        </p>
                    </li>
                    <li>
                        <p className='mb-0'>
                            <span className='fw-bolder'>Device Information: </span> we may collect information about the computer or mobile device you use to access our Site, including the hardware model, operating system and version, unique device identifiers (such as, IP address, IMEI number, the address of the device’s wireless network interface, or mobile phone number used by the device) and mobile network information.
                        </p>
                    </li>
                    <li>
                        <p className='mb-0'>
                            <span className='fw-bolder'> Location Information: </span> we may collect information about the location of your device each time you access or use one of our mobile applications or otherwise consent to the collection of this information. You can turn off location services for a device at any time, but this may turn off some useful features.
                        </p>
                    </li>
                    <li>
                        <p className='mb-0'>
                            <span className='fw-bolder'>Information Collected by Cookies and Other Tracking Technologies: </span> we and our service providers use various technologies to collect information, including cookies and web
                            beacons. Cookies are small data files stored on your hard drive or in device memory that help us improve our Site and your experience, see which areas and features of our Site are popular and count visits. Web beacons are electronic images that may be used in our services or emails and help deliver cookies, count visits and understand usage and campaign effectiveness.
                        </p>
                    </li>
                    <li>
                        <p className='mb-0'>
                            <span className='fw-bolder'>Information We Collect From Other Sources: </span> we may also obtain personal data from our hotels and from our third party service providers (such as information relating to the credit of guests) and from public sources and combine that with information we collect through our Site where we believe that it is necessary to help manage our relationship with you.
                            Where you provide personal data of third parties (for example, names and contact details of your family members in connection with bookings or family memberships), you confirm that you have their consent to provide their personal data to us. We recommend you show them this Privacy Policy.
                        </p>
                    </li>
                </ul>

                <h6>HOW WE USE YOUR PERSONAL DATA  :</h6>
                <h6 className='mb-0'>WE MAY USE YOUR PERSONAL DATA FOR THE PURPOSES SET OUT BELOW.</h6>
                <h6>FOR MEETING OUR OBLIGATIONS AND THE PERFORMANCE OF OUR AGREEMENT WITH YOU, IN ORDER TO:</h6>
                <ul>
                    <li>
                        <p className='mb-0'>
                            process, confirm, provide and charge for hotel arrangements and restaurant reservations and our goods and services, and administer mobile (where applicable) and in person check in and check out;
                        </p>
                    </li>
                    <li>
                        <p className='mb-0'>
                            fulfill contractual obligations to you, anyone involved in the process of making your travel arrangements (e.g. travel agents, group travel organizers and your employer) and vendors (e.g.credit card companies, airline operators and other loyalty programs);
                        </p>
                    </li>
                    <li>
                        <p className='mb-0'>
                            provide you with access to the content on our Site, and respond to your enquiries and requests for information and services; and
                            Administer, and disclose the winner of, contests and lucky draw competitions conducted by us or on our behalf.
                        </p>
                    </li>
                </ul>

                <h6>FOR OUR LEGITIMATE COMMERCIAL INTERESTS, IN ORDER TO:</h6>
                <ul>
                    <li>
                        <p className='mb-0'>
                            understand how our products and services impact you, provide you with a better, more personalized level of service, and further develop our products and services, including linking or
                            combining with information we get from others to do so;
                        </p>
                    </li>
                    <li>
                        <p className='mb-0'>
                            provide privileges, benefits and services to you, process applications for and administer membership programs, verify and validate your ability to access and use certain products,
                            services and information (loyalty program), and administer membership, including as regards points and rewards redemption;
                        </p>
                    </li>
                    <li>
                        <p className='mb-0'>
                            monitor your use of our Site and your bookings, and conduct analysis of the use of our Site in order to operate, evaluate and improve our Site and our services, understand your preferences,display customized content to you on our Site which may be of interest to you and troubleshoot any problems;
                        </p>
                    </li>
                    <li>
                        <p className='mb-0'>
                            conduct market analysis, market research, customer satisfaction and quality assurance surveys to improve our hotels, resorts and services;
                        </p>
                    </li>
                    <li>
                        <p className=''>
                            Provide for the safety and security of guests;
                        </p>
                    </li>
                    <li>
                        <p className=''>
                            Usage of Camera and Photography / videography equipment:
                        </p>
                        <p className=''>
                            Hotel does not allow professional cameras/ Drone(s) camera usage. Photography is prohibited unless written permission is granted. Photography, Commercial usage of photographs/videography within the hotel clicked at hotel is prohibited and is subject to written copyright approvals by the authorized representative of the hotel.
                        </p>
                    </li>
                    <li>
                        <p className=''>
                            Guest Conduct:
                        </p>
                        <p className=''>
                            Zuri Hotels and Resorts (The Zuri Whitefield Bengaluru, The Zuri White Sands Goa Resort & Casino, The Zuri Kumarakom Kerala Resort & Spa) reserves the right of admission and entry of persons entering the hotels facilities. In the unfortunate event that the client’s guests or their guest’s behaviour becomes unacceptable causing embarrassment or discomfort to others (guests or hotel staff) management of the hotel reserves the right to have the individual or individuals removed from the hotels premises.

                        </p>
                    </li>
                    <li>
                        <p className='mb-0'>
                            To comply with legal obligations to which we are subject; and
                        </p>
                    </li>
                    <li>
                        <p className='mb-0'>
                            Meet legal and regulatory requirements and administer general record keeping.
                        </p>
                    </li>
                </ul>

                <h6>USE OF INFORMATION BASED ON YOUR CONSENT:</h6>
                <ul>
                    <li>
                        <p className='mb-0'>
                            Facilitate direct marketing, promotional and customer management purposes, including sending you promotional communications (including without limitation emails and push notifications) or special offers if you have consented to receive the same. Please see section “Direct Marketing”below;
                        </p>
                    </li>
                    <li>
                        <p className='mb-0'>
                            We may use special categories of data (e.g. health data). But we will only do so if we have received your consent thereto; and
                        </p>
                    </li>
                    <li>
                        <p className='mb-0'>
                            For any other purposes for which we have your consent.
                        </p>
                    </li>
                </ul>
                <p>
                    In order to register with our mobile application, make an online hotel reservation, enroll with loyalty program or if you make an enquiry, you must provide us with the personal data marked with an asterisk or otherwise indicated as mandatory, otherwise we may not be able to process your request or comply with our legal obligations.
                </p>

                <h6>DISCLOSURES OF YOUR PERSONAL DATA</h6>
                <p className='mb-0'>
                    We may share your personal data:
                </p>
                <ul>
                    <li>
                        <p className='mb-0'>
                            With the staff of Zuri Hotels & Resorts in order to provide you our services;
                        </p>
                    </li>
                    <li>
                        <p className='mb-0'>
                            between and among Zuri Hotels & Resorts as are relevant for the above purposes and to facilitate the operation of our business, but we shall only do so on a need to know basis;
                        </p>
                    </li>
                    <li>
                        <p className='mb-0'>
                            with third-party payment processors, payment service providers, IT and marketing support service providers and other consultants, vendors and service providers who need access to such information to carry out work or provide services on our behalf or who help us to provide the Site to you;
                        </p>
                    </li>
                    <li>
                        <p className='mb-0'>
                            with anyone involved in the process of making your travel arrangements (e.g. travel agents,group travel organizers and your employer) in order to fulfill contractual obligations;
                        </p>
                    </li>
                    <li>
                        <p className='mb-0'>
                            with any law enforcement, courts, Government or regulatory bodies (in whatever jurisdiction), or otherwise in response to a request for information if we believe disclosure is in accordance with, or required by, any applicable law, regulation, court order or legal process;
                        </p>
                    </li>
                    <li>
                        <p className='mb-0'>
                            if we believe your actions are inconsistent with our user agreements or policies, or to protect the rights, property and safety of Zuri Hotels and Resorts;
                        </p>
                    </li>
                    <li>
                        <p className='mb-0'>
                            in connection with, or during negotiations of, any merger, sale of company assets, financing or acquisition of all or a portion of our business by another company, or any change of management of a hotel;
                        </p>
                    </li>
                    <li>
                        <p className='mb-0'>
                            with our advisors, which includes our accountants, auditors, lawyers, other professional advisors and business contacts for the purpose of assisting us to better manage, support or develop our business and comply with our legal and regulatory obligations; and
                            Otherwise as permitted or required by applicable laws and regulations.
                        </p>
                    </li>
                </ul>
                <p>
                    We may also disclose aggregate or de-identified data that is not personally identifiable with third parties, including our commercial and strategic partners.
                </p>

                <h6>TARGETED ADVERTISING</h6>
                <p>
                    Where permitted by law, we may work with third party service providers to share targeted advertisements or marketing material that we think maybe relevant and useful for you. For the purpose of providing targeted advertising we may use first party or third-party cookies or pixel tags or web beacons.
                </p>

                <h6>OVERSEAS TRANSFERS OF YOUR PERSONAL DATA</h6>
                <p>
                    Your personal data will be stored at, locations in India in the hotel in which you stay or visit. When personal data is transferred from the EU to outside the EU, we provide for appropriate safeguards so that enforceable privacy rights and effective legal remedies are available to you.
                </p>

                <h6>DIRECT MARKETING</h6>
                <p>
                    From time to time, we would like to use your name, email address, mobile phone number, and other relevant contact information to send you either via emails, SMS messages, telephone calls, push notifications, post, or social media (e.g. Facebook) information that we think may be of interest to you, including about our hotels, products and services, news about our membership programs,satisfaction surveys, events, offers and promotions, but we can only do so with your consent. We would also like to share (for gain) such data with the operator of the hotel or hub of hotels in which you stay or visit and with selected third party entities, so that they may send you information, news updates, special events, offers and promotions as regards their products and services,including travel, transportation, retail, food and beverage, hotel accommodation, credit cards,financial and investment services, real estate, entertainment, publications, fashion and jewelry, leisure and sports, health and wellness, non-profit and charitable activities, telecommunications, social networking, media and public relations, but we will not use your personal data for direct marketing without your consent.You may opt-out from receiving marketing communications at any time, free of charge, by following the unsubscribe instructions contained in the marketing communications or contacting Zuri Hotels and Resorts in accordance with the section “Your Rights and Contact Us” below. If you opt out of these communications, we may still send you non-promotional communications, such as those about your reservation, unless we are prohibited from doing so by applicable laws.
                </p>

                <h6>RETENTION OF PERSONAL DATA</h6>
                <p>
                    To the extent required by law, we take reasonable steps to destroy, or de-identify or redact, personal data in a secure manner when we no longer need it for the purposes for which it was collected (as set out in this Privacy Policy) and retention is no longer necessary for legal or business purposes. In any event, we do not retain your personal data for longer than eight (8) years, subject to local laws and regulations.
                </p>

                <h6>OUR COMMITMENT TO DATA SECURITY</h6>
                <p>
                    We have in place reasonable technical and organizational measures to prevent unauthorized or accidental access, processing, erasure, loss or use of your personal data and to keep your personal data confidential. These measures are subject to ongoing review and monitoring. To protect your personal data, we also require our third party service providers to take reasonable precautions to keep your personal data confidential and to prevent unauthorized or accidental access, processing, erasure, loss or use of personal data, and to act at all times in compliance with applicable data protection laws. We seek to use reasonable organizational, technical and administrative measures to protect Personal Data.<i> Unfortunately, no data transmission or storage system can be guaranteed to be 100% secure. If you have reason to believe that your interaction with us is no longer secure (for example, if you feel that the security of your account has been compromised), please immediately notify us in accordance with the “Your right and Contacting Us” section, below. We cannot guarantee that our Site will function faultless and without any interruptions. We shall not be liable for damages that may result from the use of electronic means of communication, including, but not limited to, damages resulting from the failure or delay in delivery of electronic communications, interception or manipulation of electronic communications by third parties or by computer programs used for electronic communications and transmission of viruses.  Children and Minors Except where required by local laws, we do not knowingly collect personal data from minors. If you are a minor, you may only use our Site and services with the permission of your parent or guardian.   If you are in the EU, our online services are not directed at children under the age of 13. If you believe we have collected information about a child under the age of 13, please contact us so that we may take appropriate steps to delete such information. If you are at least 13 but under the age of 16,please get the consent of your parent or legal guardian before giving us any personal data about yourself.
                    </i>
                </p>

                <h6>THIRD PARTY SITES AND APPLICATIONS</h6>
                <p>
                    The Site may contain links to other websites, apps, content, services or resources on the internet which are operated by third parties. If you access other websites, apps, content, services or resources using the links provided, please be aware they may have their own privacy policy, and we do not accept any responsibility or liability for these policies or for any personal data which may be collected through these sites. Please check these polic ies before you submit any personal information to these sites.
                </p>
                <p>
                    We request all our guests to make bookings through our official channels and travel partners only and avoid making UPI payments or transfers to individual accounts or mobile number or accepting fraudulent communication/confirmations.
                </p>

                <h6>YOUR RIGHTS AND CONTACT US</h6>
                <p>
                    You are entitled to the following rights: right of access to the personal data we hold about you, right of rectification, right to erasure, right to restrict data processing, right to object against profiling and your personal right to data portability. Whenever reasonably possible and required, we will strive to grant these rights within one (1) month. You may also withdraw your consent to receiving direct marketing communications, or more generally to our processing of your personal data, at any time, and you may in certain circumstances ask us to delete your personal data. However, we may not be able to continue providing services to you if you entirely withdraw your consent or ask us to delete your personal data entirely. In case you believe that we are in breach of this Privacy Policy, you have the right to lodge a complaint with the relevant supervisory authority. To make these requests, or if you have any questions or complaints about how we handle your personal data, or would like us to update the data we maintain about you and your preferences, please contact our data protection officer by email dpo@thezurihotels.com(Address) #244, Hoody Village, Rajapalya, ITPL Road, Whitefield, Bengaluru – 560 048, India.
                </p>

                <h6>CHANGES TO THE PRIVACY POLICY</h6>
                <p>
                    We may modify this Privacy Policy from time to time. Any changes to this Privacy Policy will beposted to the Site so that you are always informed of the way we collect and use your personal data, and we encourage you to review this Privacy Policy whenever you access the Site or otherwise interact with us to stay informed about our information practices and the ways you can help protect your privacy. Updated versions of this Privacy Policy will include the date of the revision at the end of this Privacy Policy so that you are able to check when the Privacy Policy was last amended. Any changes to this Privacy Policy will become effective upon posting of the revised Privacy Policy on the Site. Use of the Site following such changes constitutes your acceptance of the revised Privacy Policy then in effect but, to the extent such changes have a material effect on your rights or obligations as regards our handling of your personal data. You may withdraw your consent at any time for the future by contacting us under the details of the contact provided under “Your Rights and Contact Us”.
                </p>

                <h6>MISCELLANEOUS</h6>
                <p>
                    This Privacy Policy is governed by and shall be construed in accordance with the laws of India. This Privacy Policy is written in the English language and may be translated into other languages. In the event of any inconsistency between the English version and the translated version of this Privacy Policy, the English version shall prevail.
                </p>

                <span className='fw-bolder'>
                    Updated on 20th July, 2018
                </span>
            </Container >
        </>
    )
}

export default PrivacyPolicyContent