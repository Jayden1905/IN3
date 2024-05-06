'use client'

import { showDialogAtom, subCourseIndexAtom } from '@/utils/store'
import { useAtom } from 'jotai'

export default function DialogButton({ index }: { index: number }) {
  const [, setShowDialog] = useAtom(showDialogAtom)
  const [, setSubCourseIndex] = useAtom(subCourseIndexAtom)
  return (
    <button
      onClick={() => {
        setShowDialog(true)
        setSubCourseIndex(index)
      }}
      className="rounded bg-black px-4 py-3 font-semibold tracking-wide text-white"
    >
      Learn More
    </button>
  )
}
