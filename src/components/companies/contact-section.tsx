import { Mail, MapPin, Phone } from "lucide-react";

interface ContactSectionProps {
  title: string;
  subtitle: string;
  phone: string;
  email: string;
  address: string;
}

export default function ContactSection({
  title,
  subtitle,
  phone,
  email,
  address,
}: Readonly<ContactSectionProps>) {
  return (
    <section className="py-10 max-md:px-4 text-white">
      <div className="container mx-auto px-4 bg-primary rounded-xl py-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-heading text-4xl font-bold mb-2">{title}</h2>
          <p className="text-xl text-muted leading-relaxed mb-8">{subtitle}</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Phone className="h-8 w-8 mx-auto mb-4 text-muted" />
              <div className="font-semibold">Call Us</div>
              <div className="text-muted">{phone}</div>
            </div>
            <div className="text-center">
              <Mail className="h-8 w-8 mx-auto mb-4 text-muted" />
              <div className="font-semibold">Email Us</div>
              <div className="text-muted">{email}</div>
            </div>
            <div className="text-center">
              <MapPin className="h-8 w-8 mx-auto mb-4 text-muted" />
              <div className="font-semibold">Visit Us</div>
              <div className="text-muted">{address}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
