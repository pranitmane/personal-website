import Link from "next/link";

export default function NotFound() {
    return (
        <main className="justify-center my-auto flex flex-col gap-3 items-center">
            <div className="w-full flex flex-row items-center justify-center">
                <h1 className="text-xl px-2">404</h1>
                <h2 className="text-xl text-neutral-300 px-2 border-l border-neutral-700">Paget not found</h2>
            </div>
            <Link className="text-blue-300 hover:text-blue-400" href="/">
                Back to home
            </Link>
        </main>
    );
}
