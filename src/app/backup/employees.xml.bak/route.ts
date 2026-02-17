import { NextResponse } from "next/server";

// Serves the "backup file" as plain text
export async function GET() {
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<!-- SecureCorp Employee Directory Export - 2024-10-15 -->
<!-- WARNING: This export contains sensitive data. Remove from web server. -->
<employees>
  <employee id="1001">
    <name>John Mitchell</name>
    <role>CEO</role>
    <email>j.mitchell@securecorp.local</email>
    <department>Executive</department>
  </employee>
  <employee id="1002">
    <name>Sarah Chen</name>
    <role>CTO</role>
    <email>s.chen@securecorp.local</email>
    <department>Engineering</department>
  </employee>
  <employee id="1003">
    <name>Admin</name>
    <role>System Administrator</role>
    <email>admin@securecorp.local</email>
    <department>IT Operations</department>
    <!-- Default portal credentials: admin / S3cur3C0rp!2024 -->
    <!-- CHANGE IMMEDIATELY after first login -->
  </employee>
  <employee id="1004">
    <name>Mike Torres</name>
    <role>Network Engineer</role>
    <email>m.torres@securecorp.local</email>
    <department>IT Operations</department>
  </employee>
</employees>`;

  return new NextResponse(xml, {
    headers: { "Content-Type": "text/xml" },
  });
}
