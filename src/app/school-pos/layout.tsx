import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'School Concession Stand POS System | Skybound Solutions',
    description:
        'Purpose-built iPad POS for school concession stands. Accept cards, track sales, and raise more at every event. Personal setup and local support included.',
    keywords: [
        'school concession POS',
        'booster club point of sale',
        'school fundraising POS',
        'concession stand card reader',
        'school concession stand software',
    ],
    openGraph: {
        title: 'School Concession Stand POS System | Skybound Solutions',
        description: 'Purpose-built iPad POS for school concession stands. Accept cards, track sales, and raise more at every event.',
        url: 'https://skyboundmi.com/school-pos',
        siteName: 'Skybound Solutions',
        locale: 'en_US',
        type: 'website',
    },
};

export default function SchoolPOSLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
