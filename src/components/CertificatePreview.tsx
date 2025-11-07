import { format } from "date-fns";

interface FormData {
  transactionNo: string;
  certificationNo: string;
  issuedDate: Date | undefined;
  prefix: string;
  firstname: string;
  middleName: string;
  surname: string;
  extension: string;
  houseBlockLot: string;
  street: string;
  zone: string;
  age: string;
  dateOfBirth: Date | undefined;
  placeOfBirth: string;
  contactNo: string;
  residencyPeriod: string;
  registeredVoter: string;
  houseOwner: string;
  relationship: string;
  purpose: string;
  punongBarangay: string;
  forPunongBrgy: string;
}

interface CertificatePreviewProps {
  formData: FormData;
}

export const CertificatePreview = ({ formData }: CertificatePreviewProps) => {
  const fullName = `${formData.prefix} ${formData.firstname} ${formData.middleName.charAt(0)}. ${formData.surname}${
    formData.extension ? " " + formData.extension : ""
  }`.toUpperCase();

  const fullAddress = `${formData.houseBlockLot} ${formData.street} - ${formData.zone}`;

  return (
    <div className="bg-[hsl(var(--certificate-bg))] rounded-lg shadow-xl p-8 md:p-12 border-4 border-[hsl(var(--accent))] min-h-[600px]">
      <div className="text-center mb-8 border-b-2 border-[hsl(var(--accent))] pb-4">
        <h1 className="text-3xl md:text-4xl font-bold text-foreground tracking-wide mb-2">
          BARANGAY CERTIFICATION
        </h1>
        <div className="flex items-center justify-end gap-4 text-sm text-muted-foreground">
          <span>
            {formData.issuedDate ? format(formData.issuedDate, "EEEE, d MMMM yyyy") : "Date not set"}
          </span>
        </div>
      </div>

      <div className="mb-8">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-primary">{fullName || "[NAME]"}</h2>
          <p className="text-lg text-muted-foreground mt-1">{fullAddress || "[ADDRESS]"}</p>
          <p className="text-md text-muted-foreground">
            {formData.issuedDate ? format(formData.issuedDate, "do 'of' MMMM, yyyy") : "[DATE]"}
          </p>
        </div>

        <div className="bg-card rounded-lg p-6 shadow-md border border-border">
          <div className="space-y-4 text-base leading-relaxed text-foreground">
            <p className="indent-8">
              This is to certify that <strong>{fullName || "{NAME}"}</strong> of legal age, Filipino, is a
              bona fide resident of <strong>{fullAddress || "{Address}"}</strong>, West Rembo, Taguig City.
            </p>

            <p className="indent-8">
              This certification is issued upon the request of the above mentioned person in support to
              his/her residency requirements for <strong>{formData.purpose || "{Purpose}"}</strong>.
            </p>

            <p className="indent-8">
              Issued on the <strong>{formData.issuedDate ? format(formData.issuedDate, "do") : "{Day}"}</strong>{" "}
              day of{" "}
              <strong>
                {formData.issuedDate ? format(formData.issuedDate, "MMMM, yyyy") : "{MONTH, YYYY}"}
              </strong>{" "}
              at Barangay West Rembo Taguig City.
            </p>

            <div className="mt-8 pt-6 border-t border-border">
              <p className="text-sm text-muted-foreground">
                {formData.issuedDate ? format(formData.issuedDate, "MM/dd/yyyy") : "00/00/0000"}{" "}
                By10FATMA By10SAGRE By10SAGRE By10
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 flex justify-between items-end">
        <div className="text-left">
          <div className="text-sm text-muted-foreground mb-1">Verified by:</div>
          <div className="border-t-2 border-foreground pt-2 min-w-[200px]">
            <p className="font-semibold text-foreground">Barangay Staff</p>
          </div>
        </div>

        <div className="text-center">
          <div className="border-4 border-[hsl(var(--accent))] rounded-full w-24 h-24 flex items-center justify-center mb-2 bg-[hsl(var(--official-seal))]/10">
            <span className="text-xs font-bold text-center">OFFICIAL<br/>SEAL</span>
          </div>
          <div className="border-t-2 border-foreground pt-2 min-w-[200px]">
            <p className="font-bold text-foreground text-lg">
              {formData.punongBarangay || "HON. [NAME]"}
            </p>
            <p className="text-sm text-muted-foreground">Punong Barangay</p>
          </div>
        </div>
      </div>

      <div className="mt-8 text-center text-xs text-muted-foreground border-t pt-4">
        <p>Barangay West Rembo, Taguig City</p>
        <p className="mt-1">
          Certification No: <strong>{formData.certificationNo || "BC-YYYY-MM-XXXX"}</strong> | Transaction
          No: <strong>{formData.transactionNo || "XX"}</strong>
        </p>
      </div>
    </div>
  );
};
