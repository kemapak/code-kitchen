<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/">
    <table>
        <thead>
            <tr>
                <th>Book Title</th>
                <th>Category</th>
                <th>Price</th>
                <th>ISBN</th>
            </tr>
        </thead>
        <tbody>
    <xsl:for-each select="books/book">
        <tr>
            <td><strong><xsl:value-of select="title"/></strong></td>
            <td><xsl:value-of select="category"/></td>
            <td><strong>$</strong><xsl:value-of select="price"/></td>
            <td><xsl:value-of select="isbn"/></td>
        </tr>
    </xsl:for-each>
        </tbody>
    </table>
    </xsl:template>
</xsl:stylesheet>
