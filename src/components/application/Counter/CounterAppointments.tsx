import { addPointerInStringValue } from '@/utils/add-pointer-in-number';

export function CounterAppointments({ title, value, length }: CounterProps) {
  const currentValueGeneral = String(value)
    .replace('.', '')
    .substring(0, length);

  const addPointerYearly = addPointerInStringValue(currentValueGeneral);

  const serviceNumberInitialValueYearly = Array.from(addPointerYearly);

  return (
    <>
      <div>
        <h1 className="text-smfont-extralight text-gray-400">{title}</h1>

        <div className="bg-gray-700 p-5 overflow-hidden rounded-md mt-2  flex flex-col items-center">
          <div className="flex items-center gap-2">
            <span className="bg-gray-500 w-6 flex items-center justify-center py-1 rounded-sm text-gray-300">
              R
            </span>
            <span className="bg-gray-500 w-6 flex items-center justify-center py-1 rounded-sm text-gray-300">
              $
            </span>
            {serviceNumberInitialValueYearly.map((value, index) => {
              return (
                <span
                  key={index}
                  className="tick bg-gray-500 w-6 flex items-center justify-center py-1 rounded-sm text-gray-300"
                >
                  {value}
                </span>
              );
            })}
          </div>

          <div className="mt-5 w-full flex items-center justify-evenly text-gray-300 font-light">
            <span>Milhões</span>
            <span>Milhares</span>
            <span>Centenas</span>
          </div>
        </div>
      </div>
    </>
  );
}
