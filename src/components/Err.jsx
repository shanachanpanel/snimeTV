import useLoad from "../hooks/useLoad"
import Loading from "./Loading"

const Err = () => 
{
  const loading = useLoad()

  return (
    <>
      {loading && <Loading/>}
      <div className="mt-5 text-center pt-5 text-light">
        MAAF SERVER SEDANG EROR
      </div>
    </>
  )
}

export default Err
