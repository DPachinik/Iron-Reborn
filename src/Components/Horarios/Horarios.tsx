import React from 'react';
import TituloCentral from '../TituloCentral/TituloCentral';

const Horarios = () => {
  const baseBorder = 'border-4 border-[#1C1C1C]';
  const headerCellStyle = `${baseBorder} p-3 font-exo`;
  const hourCellStyle = `${baseBorder} text-white font-light text-md p-4 whitespace-nowrap`;
  const classCellStyle = `${baseBorder} font-normal px-2`;

  return (
    <div className="w-full">
      <TituloCentral text="Clases y Horarios" />
      <div className="container mx-auto flex overflow-x-auto md:justify-center">
        <table
          className={`${baseBorder}text-xs min-w-[700px] bg-black font-medium text-gray-400 md:text-base`}
        >
          <thead className={baseBorder}>
            <tr className={`${baseBorder} text-[#ff2323]`}>
              <th className={headerCellStyle}>Horarios</th>
              <th className={headerCellStyle}>Lunes</th>
              <th className={headerCellStyle}>Martes</th>
              <th className={headerCellStyle}>Miércoles</th>
              <th className={headerCellStyle}>Jueves</th>
              <th className={headerCellStyle}>Viernes</th>
              <th className={headerCellStyle}>Sábado</th>
            </tr>
          </thead>

          <tbody>
            <tr className="text-center">
              <td className={hourCellStyle}>05:00 - 12:00</td>
              <td colSpan={5} className={classCellStyle}>
                Musculación
              </td>
              <td className={baseBorder}></td>
            </tr>

            <tr className="text-center">
              <td className={hourCellStyle}>12:00 - 19:00</td>
              <td colSpan={5} className={classCellStyle}>
                Musculación
              </td>
              <td className={baseBorder}></td>
            </tr>

            <tr className="text-center">
              <td className={hourCellStyle}>14:00 - 18:00</td>
              <td colSpan={5} className={baseBorder}></td>
              <td className={classCellStyle}>Musculación</td>
            </tr>

            <tr className="text-center">
              <td className={hourCellStyle}>19:00 - 20:00</td>
              <td className={classCellStyle}>Musc. + Funcional</td>
              <td className={classCellStyle}>Musc.</td>
              <td className={classCellStyle}>Musc. + Funcional</td>
              <td className={classCellStyle}>Musc.</td>
              <td className={classCellStyle}>Musc. + Funcional</td>
              <td className={classCellStyle}></td>
            </tr>

            <tr className="text-center">
              <td className={hourCellStyle}>20:00 - 21:00</td>
              <td className={classCellStyle}>Musc. + Cardio</td>
              <td className={classCellStyle}>Musc.</td>
              <td className={classCellStyle}>Musc. + Cardio</td>
              <td className={classCellStyle}>Musc.</td>
              <td className={classCellStyle}>Musc. + Cardio</td>
              <td className={classCellStyle}></td>
            </tr>

            <tr className="text-center">
              <td className={hourCellStyle}>21:00 - 22:00</td>
              <td colSpan={5} className={classCellStyle}>
                Musculación
              </td>
              <td className={classCellStyle}></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Horarios;
