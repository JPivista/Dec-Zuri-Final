'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/navigation';

const KumarkomBreadcrumbs = () => {
    const router = useRouter();


    return (
        <>
            {/* <div className={router.asPath == "/lake-resorts-in-kumarakom/destination" ? "breadcrumbs-active" : ""}>
                <Link href="/lake-resorts-in-kumarakom/destination">home</Link>
            </div> */}

            <Link href="/lake-resorts-in-kumarakom/destination" className={(pathname == "/lake-resorts-in-kumarakom/destination" ? "breadcrumbs-active" : "")} >
                hello
            </Link >

            <div>
                <div className={`breadcrumb-item ${router.pathname === '/homepage' ? 'active' : ''}`}>
                    Dashboard
                </div>
                <div className={`breadcrumb-item ${router.pathname === '/customers' ? 'active' : ''}`}>
                    Customers
                </div>
                {/* Add more breadcrumb items as needed */}
            </div>
        </>
    );
};

export default KumarkomBreadcrumbs;
