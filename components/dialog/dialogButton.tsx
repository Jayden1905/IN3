'use client'

import { showDialogAtom, subCourseIndexAtom } from '@/utils/store'
import { useAtom } from 'jotai'
import { Button } from '../ui/button'

export default function DialogButton({
  index,
  title,
}: {
  index: number
  title: string
}) {
  const [, setShowDialog] = useAtom(showDialogAtom)
  const [, setSubCourseIndex] = useAtom(subCourseIndexAtom)

  return (
    <Button
      onClick={() => {
        setShowDialog(true)
        setSubCourseIndex(index)
      }}
      size={'lg'}
      className="text-lg"
    >
      Learn More
    </Button>
  )
}
