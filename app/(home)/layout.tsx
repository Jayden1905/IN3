import WhatsappSupport from '@/components/customerSupport/whatsapp'
import Footer from '@/components/layout/footer'
import Nav from '@/components/nav/nav'
import { Toaster } from '@/components/ui/toaster'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Nav />
      <WhatsappSupport />
      <div className="pt-20 md:bottom-20">
        <main>{children}</main>
      </div>
      <Toaster />
      <Footer />
    </>
  )
}
