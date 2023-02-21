
export default function SumaJavaScript(props) {

  return (
    <>
      <h1>Componente de Suma en <span>JavaScript</span></h1>
      <div>
        <p>El Primer sumando es el numero: {props.sumando1}</p>
        <p>El Segundo sumando es el numero: {props.sumando2}</p>
        <p className="resultado">El Resultado de la suma es {props.sumando1 + props.sumando2}</p>
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

        h1>span {
          color: black;
          background: #f7df1e;
          padding: 0.5rem 1rem;
          border-radius: 16px;
        }
      `}</style>
    </>
  );
}
