export default function NotFound() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-3xl sm:text-4xl text-center sm:text-left font-bold">
        Página no encontrada
      </h1>
      <p className="text-lg text-center sm:text-left">
        Lo sentimos, la página que estás buscando no existe o ha sido movida.
        Por favor, verifica la URL o vuelve a la página principal.
      </p>
    </div>
  );
}
