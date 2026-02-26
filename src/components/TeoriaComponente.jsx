const TeoriaComponente = (props) => {
  return (
    <section>
      <h2>Componente de REACT</h2>
      <p>Los componentes funcionales en React son funciones de JavaScript que retornan JSX para renderizar la interfaz de usuario. Son la forma estándar y moderna de crear componentes, permitiendo gestionar estado y ciclo de vida mediante Hooks, aceptando props como argumentos y promoviendo la reutilización de código.</p>
      <div>
        Comision: {props.comision} Modulo: {props.modulo} Año: {props.anioActual}
      </div>
    </section>
  )
}

export default TeoriaComponente
