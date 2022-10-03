<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/">
        <table>
            <thead>
                <tr>
                    <th align="left">Title</th>
                    <th align="left">Artist</th>
                </tr>
            </thead>
            <tbody>
            <xsl:for-each select="catalog/cd">
                <tr>
                    <td><xsl:value-of select="title"/></td>
                    <td><xsl:value-of select="artist"/></td>
                </tr>
            </xsl:for-each>
            </tbody>
        </table>
    </xsl:template>
</xsl:stylesheet>