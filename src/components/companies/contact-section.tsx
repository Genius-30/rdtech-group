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
    <section className="py-16 max-md:px-6 bg-white">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="font-heading text-4xl font-bold mb-3 text-gray-900">
            {title}
          </h2>
          <p className="text-lg leading-relaxed text-gray-600">{subtitle}</p>
        </div>

        {/* Contact Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mx-auto">
          {/* Phone */}
          <div className="text-center">
            <Phone className="h-10 w-10 mx-auto mb-4 text-accent" />
            <h3 className="font-semibold text-lg mb-1 text-gray-800">
              Call Us
            </h3>
            <p className="text-gray-600">{phone}</p>
          </div>

          {/* Email */}
          <div className="text-center">
            <Mail className="h-10 w-10 mx-auto mb-4 text-accent" />
            <h3 className="font-semibold text-lg mb-1 text-gray-800">
              Email Us
            </h3>
            <p className="text-gray-600">{email}</p>
          </div>

          {/* Address */}
          <div className="text-center">
            <MapPin className="h-10 w-10 mx-auto mb-4 text-accent" />
            <h3 className="font-semibold text-lg mb-1 text-gray-800">
              Visit Us
            </h3>
            <p className="text-gray-600">{address}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
