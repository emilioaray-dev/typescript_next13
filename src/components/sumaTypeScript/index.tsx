import { useState } from "react";

interface SumaTypeScriptProps {
  /**
   ** Ingresar valor tipo numero.
   * @example
   * ```
   * sumando1={3}
   * ```
   *  */
  sumando1: number;
  /**
   ** Ingresar valor tipo numero.
   * @example
   * ```
   * sumando2={2}
   * ```
   *  */
  sumando2: number;
}

/**
 * Ingresa dos (2) numero como parametros y retorna la suma de ellos.
 * @param sumando1 - El Primer sumando.
 * @param sumando2 - El Segundo sumando.
 * @returns Un Componente que toma dos números y retorna la suma.
 */
export default function SumaTypeScript(props: SumaTypeScriptProps) {
  const sumando1 = props.sumando1;
  const sumando2 = props.sumando2;

  return (
    <>
      <h1>
        Componente de Suma en <span>TypeScript</span>
      </h1>
      <div>
        <p>El Primer sumando es el numero: {sumando1}</p>
        <p>El Segundo sumando es el numero: {sumando2}</p>
        <p className="resultado">El Resultado de la suma es = {sumando1 + sumando2}</p>
      </div>

      <style jsx>{`
        .resultado {
          margin-top: 0.5rem;
          color: green;
        }

        p {
          font-size: 2rem;
        }

        h1 {
          text-align: center;
          margin: 1rem;
        }

        h1 > span {
          color: white;
          background: #3178c6;
          padding: 0.5rem 1rem;
          border-radius: 16px;
        }
      `}</style>
    </>
  );
}
