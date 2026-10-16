import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-stone-950 text-stone-100 flex flex-col items-center justify-center p-6 text-center">
      <div className="space-y-4 max-w-md">
        <span className="text-4xl">🌿</span>
        <h1 className="text-3xl font-serif font-bold text-amber-100">Страницата не е пронајдена</h1>
        <p className="text-stone-400 text-sm">
          Страницата што ја баравте не постои или е преместена.
        </p>
        <div className="pt-4">
          <Link
            href="/"
            className="inline-block px-6 py-2.5 bg-amber-500 hover:bg-amber-400 text-stone-950 font-semibold rounded-lg transition-colors text-sm"
          >
            Врати се на почетна
          </Link>
        </div>
      </div>
    </div>
  );
}
