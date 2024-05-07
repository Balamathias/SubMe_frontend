import React from 'react'

interface DynamicModalProps {
    children: React.ReactNode,
    trigger: React.ReactNode,
    isOpen?: boolean,
    setOpened?: React.Dispatch<React.SetStateAction<boolean>>
}
const DynamicModal = ({children, trigger, isOpen, setOpened}: DynamicModalProps) => {
  return (
    <div>DynamicModal</div>
  )
}

export default DynamicModal