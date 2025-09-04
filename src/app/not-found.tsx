import Link from "next/link";

export default function NotFound() {
    return (
        <main className="justify-center flex flex-col gap-3 items-center">
            <div className="w-full flex flex-row items-center justify-center">
                <h1 className="text-xl px-2">404</h1>
                <h2 className="text-xl text-secondary-txt px-2 border-l border-border-primary">Paget not found</h2>
            </div>
            <Link className="text-hyperlink hover:text-hyperlink-hover" href="/">
                Back to home
            </Link>
        </main>
    );
}
