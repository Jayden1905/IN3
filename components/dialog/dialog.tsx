'use client'
import { urlFor } from '@/utils/sanity/client'
import { showDialogAtom, subCourseIndexAtom } from '@/utils/store'
import { SubCoursesType } from '@/utils/types'
import { useAtom } from 'jotai'
import { useEffect, useRef } from 'react'
import { Avatar, AvatarImage } from '../ui/avatar'
import { AvatarFallback } from '@radix-ui/react-avatar'

type Props = {
  data: SubCoursesType[]
}

export default function Dialog({ data }: Props) {
  const dialogRef = useRef<null | HTMLDialogElement>(null)

  const [showDialog, setShowDialog] = useAtom(showDialogAtom)
  const [subCourseIndex] = useAtom(subCourseIndexAtom)

  const course = data[subCourseIndex]

  const courseInitial = course.title
    .split(' ')
    .map((word) => word[0])
    .join('')
    .slice(0, 2)

  useEffect(() => {
    if (showDialog) {
      dialogRef.current?.showModal()
      document.body.style.overflow = 'hidden'
    } else {
      dialogRef.current?.close()
    }
  }, [showDialog])

  const closeDialog = () => {
    setShowDialog(false)
    document.body.style.overflow = 'auto'
  }

  const clickOk = () => {
    closeDialog()
  }

  const dialog: JSX.Element | null = showDialog ? (
    <dialog
      ref={dialogRef}
      className="top-50 left-50 -translate-x-50 -translate-y-50 fixed z-10 rounded-xl backdrop:bg-black/60"
    >
      <div className="flex max-w-5xl flex-col bg-gray-200">
        <div className="mb-4 flex flex-row justify-between bg-[#4e374f] px-5 pt-5">
          <div className="mb-5 flex flex-col gap-3 md:flex-row">
            <Avatar>
              <AvatarImage
                className="h-20 w-20 rounded-xl md:h-24 md:w-24"
                src={urlFor(course.mainImage).url()}
              />
              <AvatarFallback>
                <div className="flex h-24 w-24 items-center justify-center rounded-xl bg-white">
                  <h1 className="text-myOrange text-3xl font-bold">
                    {courseInitial}
                  </h1>
                </div>
              </AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
              <h1 className="font-sfpro text-xl font-bold text-white md:text-2xl md:tracking-wider">
                {course.title}
              </h1>
              <p className="text-xl font-bold text-white md:text-2xl">
                Age: <span className="text-myOrange">{course.ageGroup}</span>
              </p>
            </div>
          </div>
          <button
            onClick={closeDialog}
            className="mb-2 flex h-8 w-8 cursor-pointer items-center justify-center rounded border-none bg-red-700 px-2 py-1 text-2xl font-bold text-white"
          >
            x
          </button>
        </div>
        <div className="px-5 pb-6">
          {course.description}
          <div className="mt-2 flex flex-row justify-end">
            <button
              onClick={clickOk}
              className="bg-myOrange rounded px-4 py-3 font-semibold tracking-wide text-white"
            >
              Book a Trial
            </button>
          </div>
        </div>
      </div>
    </dialog>
  ) : null

  return dialog
}
