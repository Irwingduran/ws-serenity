import RequiredStudiesTable from "../components/required-studies-table"
import { Button } from "../components/ui/button"
import { FileText, Calendar, Phone } from "lucide-react"

export default function RequiredStudiesPage() {
  return (
    <div className="flex flex-col min-h-screen">

      {/* Hero Section */}
      <section className="bg-[#77B5B2]/10 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl font-bold text-[#507775] mb-4">Preoperative Studies</h1>
            <p className="text-lg text-[#507775]/80 mb-6">
              Detailed information about the studies required before your surgical procedure to ensure your safety and the best results.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-[#77B5B2] hover:bg-[#507775] text-white">
                <Calendar className="h-4 w-4 mr-2" />
                Schedule Consultation
              </Button>
              <Button variant="outline" className="border-[#77B5B2] text-[#507775] hover:bg-[#77B5B2]/10">
                <Phone className="h-4 w-4 mr-2" />
                Ask Questions
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <RequiredStudiesTable />

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#77B5B2]/10 p-6 rounded-lg shadow-md">
              <FileText className="h-10 w-10 text-[#77B5B2] mb-4" />
              <h3 className="text-xl font-bold text-[#507775] mb-2">Why are these studies necessary?</h3>
              <p className="text-[#507775]/80">
                Preoperative studies are essential to assess your health status and ensure the procedure is performed safely, minimizing risks and complications.
              </p>
            </div>

            <div className="bg-[#77B5B2]/10 p-6 rounded-lg shadow-md">
              <Calendar className="h-10 w-10 text-[#77B5B2] mb-4" />
              <h3 className="text-xl font-bold text-[#507775] mb-2">When should I do them?</h3>
              <p className="text-[#507775]/80">
                We recommend performing these studies 2-4 weeks before your procedure. The results are valid for 30 days for most studies.
              </p>
            </div>

            <div className="bg-[#77B5B2]/10 p-6 rounded-lg shadow-md">
              <Phone className="h-10 w-10 text-[#77B5B2] mb-4" />
              <h3 className="text-xl font-bold text-[#507775] mb-2">Where can I get them done?</h3>
              <p className="text-[#507775]/80">
                You can have them done at any trusted laboratory. We also have partner labs that offer preferential rates for our patients.
              </p>
            </div>
          </div>
        </div>
      </section>



    </div>
  )
}
