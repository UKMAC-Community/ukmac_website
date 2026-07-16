export default function LoadingNewsPage() {
  return (
    <main className="min-h-screen bg-earth-50 px-4 pb-24 pt-28 sm:px-6 sm:pt-32 lg:px-8">
      <div className="mx-auto max-w-7xl animate-pulse">
        <div className="border-b border-stone-200 pb-8">
          <div className="h-3 w-36 bg-stone-200" />
          <div className="mt-5 h-12 w-full max-w-lg bg-stone-200" />
          <div className="mt-5 h-4 w-full max-w-xl bg-stone-200" />
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }, (_, index) => (
            <div key={index} className="overflow-hidden border border-stone-200 bg-white">
              <div className="aspect-[16/9] bg-stone-200" />
              <div className="space-y-4 p-6">
                <div className="h-3 w-24 bg-stone-200" />
                <div className="h-6 w-5/6 bg-stone-200" />
                <div className="h-4 w-full bg-stone-200" />
                <div className="h-4 w-2/3 bg-stone-200" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
