
/* eslint-disable */

export default function Layout({ children }: any) {
    return (
        <>
            <div className="flex">
                <a href="/profile/contact">Contact</a>
                <a href="/profile/aboutme">About Me</a>
            </div>

            {children}
        </>
    )
}