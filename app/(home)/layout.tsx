import Footer from '@/components/layout/footer'
import Nav from '@/components/nav/nav'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Nav />
      <div className="pt-24 md:bottom-20">
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}
