import { useNavigate, useParams } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";
import { useEffect, useState } from "react";

import api from "../api/axios";
import Slider from "../components/Slider";

function PropertyDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [property, setProperty] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function getProperty() {
      try {
        setIsLoading(true);
        const res = await api.get(`/properties/${id}`);
        setProperty(res.data.data.property);
      } catch (error) {
        console.log("error getting property details", error);
      } finally {
        setIsLoading(false);
      }
    }
    getProperty();
  }, [id]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="h-14 w-14 animate-spin rounded-full border-2 border-gray-200 border-t-black" />
      </div>
    );
  }

  if (!property) return null;

  return (
    <div className="min-h-screen bg-gray-50 ">
      {/* top bar */}
      <div className="mx-auto max-w-6xl px-4 md:px-8 py-10">
        <button
          className="inline-flex items-center gap-2 rounded-lg border bg-white px-4 py-2 text-sm font-medium hover:bg-gray-100 transition"
          onClick={() => navigate(-1)}
        >
          <FaArrowLeft /> Back
        </button>

        {/* title */}
        <div className="mt-6">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
            {property.title}
          </h1>
          <p className="mt-2 text-gray-600">
            {"Premium stay"} • { "Morocco"}
          </p>
        </div>

        {/* main grid */}
        <div className="mt-8 grid gap-8 lg:grid-cols-5">
          {/* gallery */}
          <div className="lg:col-span-3 overflow-hidden rounded-2xl bg-white shadow-sm border">
            <div className="aspect-[16/10] w-full">
              <Slider images={property.images || []} />
            </div>
          </div>

          {/* info card */}
          <div className="lg:col-span-2 space-y-6">
            {/* description */}
            <div className="rounded-2xl border bg-white p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-gray-900">
                About this place
              </h2>
              <p className="mt-3 text-gray-700 leading-relaxed">
                {property.description}
              </p>
            </div>

            {/* stats */}
            <div className="rounded-2xl border bg-white p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-gray-900">
                Details
              </h2>

              <div className="mt-4 grid grid-cols-3 gap-3">
                <div className="rounded-xl bg-gray-50 p-3 text-center">
                  <p className="text-xs text-gray-500">Bedrooms</p>
                  <p className="text-lg font-bold">{property.bedrooms}</p>
                </div>

                <div className="rounded-xl bg-gray-50 p-3 text-center">
                  <p className="text-xs text-gray-500">Bathrooms</p>
                  <p className="text-lg font-bold">{property.bathrooms}</p>
                </div>

                <div className="rounded-xl bg-gray-50 p-3 text-center">
                  <p className="text-xs text-gray-500">Area</p>
                  <p className="text-lg font-bold">{property.area} km</p>
                </div>
              </div>

              {/* CTA */}
              <button className="mt-6 w-full rounded-xl bg-black py-3 text-white font-medium hover:bg-black/90 transition">
                Reserve Now
              </button>

              <p className="mt-2 text-center text-xs text-gray-500">
                Secure booking • Instant confirmation
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PropertyDetails;
