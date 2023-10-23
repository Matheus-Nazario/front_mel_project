export function Button({
  text,
  title,
  active,
  content,
  onGetButtonContent,
}: ButtonProps) {
  return (
    <div>
      <div className="mt-5 flex flex-col md:flex-row items-center justify-between gap-5">
        <button
          onClick={() =>
            onGetButtonContent(
              title,
              text,
              content.sale_challenger,
              content.cost_challenger,
              content.personalization_challenger
            )
          }
          className={`${
            active ? 'bg-brand-500' : 'bg-gray-700'
          } flex-1 w-full  py-3 text-gray-300 font-light rounded-md border-2 border-gray-600 hover:brightness-90 transition-all`}
          type="button"
        >
          {text}
        </button>
      </div>
    </div>
  );
}
