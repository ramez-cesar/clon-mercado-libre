import React, { useContext } from 'react'
import { ProductContext } from '../../Context'
import { IconAlertCircleFilled } from '@tabler/icons-react'

let incorrectInformation

function Form () {
  const {
    setOpenModal,
    setShowCP,
    codePostal,
    setCodePostal,
    incorrectCP,
    setIncorrectCP,
    errorMessageCP,
    setErrorMessageCP
  } = useContext(ProductContext)

  const addCodePostal = (e) => {
    e.preventDefault()

    if (codePostal.length < 5) {
      setErrorMessageCP('correctCP')
      setIncorrectCP(true)
    } else {
      setOpenModal(false)
      setShowCP(true)
    }
  }

  incorrectInformation = incorrectCP ? '#f04449' : '#000000a4'

  const getCodePostal = (e) => {
    const codePostal = e.target.value
    // Se estable el formato de código postal en México (de 5 caracteres).
    const MXPostalCodeFormat = codePostal.slice(0, 5)

    setCodePostal(MXPostalCodeFormat)
  }

  return (
    <form>
      <label type='number'>
        <h4 className={`text-[${incorrectInformation}] codePostalIncorrect text-sm font-semibold tracking-wider`}>Código postal</h4>
        <div className={`w-[280px] mt-1 py-2 px-2 border-2 border-[${incorrectInformation}] rounded-md`}>
          <input
            onChange={getCodePostal}
            className='w-[200px] text-base text-[#000000a4] font-semibold rounded-md placeholder:text-[#0000004d] outline-none'
            value={codePostal}
            placeholder='Ingresa un código postal'
            type='number'
            required
            autoComplete='off'
          />
          <button
            onClick={addCodePostal}
            className='py-1 px-3 text-sm text-white tracking-wider bg-[#3483fa] rounded-md duration-[.2s] hover:bg-[#2968c8]'
          >
            Usar
          </button>
        </div>
        <p className={`messageCP ${errorMessageCP} mt-1 text-xs text-[#f04449] font-semibold items-center gap-1`}>
          <IconAlertCircleFilled className='w-[15px] h-[15px]' />
          Ingresa un código postal válido.
        </p>
      </label>
    </form>
  )
}

export default Form
