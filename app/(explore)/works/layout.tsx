import TestimonialsPage from "@/components/shared/testmonilas"


interface WorksLayoutProps{
    children: React.ReactNode
}

const WorlsLayout = ({children}:WorksLayoutProps) => {
  return (
    <main>
      <div>
        {children}
        <TestimonialsPage/>
      </div>
    </main>
  )
}

export default WorlsLayout
