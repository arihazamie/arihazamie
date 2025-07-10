"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ExternalLink,
  Download,
  Shield,
  Calendar,
  Building,
} from "lucide-react";
import Image from "next/image";
import type { CertificateModalProps } from "../types/certificate";

export function CertificateModal({
  certificate,
  isOpen,
  onClose,
}: CertificateModalProps) {
  if (!certificate) return null;

  return (
    <Dialog
      open={isOpen}
      onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto p-0 bg-white border shadow-xl">
        {/* Header */}
        <DialogHeader className="p-6 pb-4 border-b bg-gray-50">
          <DialogTitle className="text-2xl font-bold text-gray-900 mb-2">
            {certificate.title}
          </DialogTitle>
          <p className="text-gray-600">{certificate.issuer}</p>
        </DialogHeader>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Certificate Image */}
          <div className="w-full max-w-2xl mx-auto">
            <div className="relative aspect-[4/3] bg-gray-100 rounded-lg overflow-hidden border">
              <Image
                src={certificate.imageUrl || "/placeholder.svg"}
                alt={certificate.title}
                fill
                className="object-cover"
                crossOrigin="anonymous"
              />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 justify-center">
            <Button
              onClick={() => window.open(certificate.imageUrl, "_blank")}
              className="bg-blue-600 hover:bg-blue-700 text-white">
              <ExternalLink className="h-4 w-4 mr-2" />
              Lihat Full Size
            </Button>
            <Button
              variant="outline"
              onClick={() => {
                const link = document.createElement("a");
                link.href = certificate.imageUrl;
                link.download = `${certificate.title}.jpg`;
                link.click();
              }}>
              <Download className="h-4 w-4 mr-2" />
              Download
            </Button>
          </div>

          {/* Certificate Info */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Basic Info */}
            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <Building className="h-5 w-5 text-gray-600" />
                  <h3 className="font-semibold text-gray-900">Penerbit</h3>
                </div>
                <p className="text-gray-700">{certificate.issuer}</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <Calendar className="h-5 w-5 text-gray-600" />
                  <h3 className="font-semibold text-gray-900">
                    Tanggal Terbit
                  </h3>
                </div>
                <p className="text-gray-700">{certificate.issueDate}</p>
              </div>
            </div>

            {/* Verification */}
            {certificate.credentialId && (
              <div className="space-y-4">
                <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                  <div className="flex items-center gap-3 mb-3">
                    <Shield className="h-5 w-5 text-green-600" />
                    <h3 className="font-semibold text-green-800">Verifikasi</h3>
                  </div>
                  <p className="text-sm text-green-700 mb-3">
                    ID:{" "}
                    <code className="bg-green-100 px-2 py-1 rounded text-xs">
                      {certificate.credentialId}
                    </code>
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Description */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-3">Deskripsi</h3>
            <p className="text-gray-700 leading-relaxed">
              {certificate.description}
            </p>
          </div>

          {/* Skills */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-3">
              Keahlian yang Dipelajari
            </h3>
            <div className="flex flex-wrap gap-2">
              {certificate.skills.map((skill) => (
                <Badge
                  key={skill}
                  variant="secondary"
                  className="bg-blue-100 text-blue-800 hover:bg-blue-200">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
