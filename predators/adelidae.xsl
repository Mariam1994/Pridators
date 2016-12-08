<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
	<xsl:template match="/">
		<html>
			<head>
				<title>
					<xsl:value-of select="root/caption"/>
				</title>
				<style>
					@import url(content/styles/atelidae.css);
				</style>
        <script src="scripts/jQuery.js"></script>
        <script src="scripts/console.js"></script>
        <script src="scripts/title.js"></script>
			</head>
			<body title="{root/caption}" onload="showInConsole(); forTitle('Atelidae')">
				<main>
					<table>
				<h3>
					<xsl:value-of select="root/caption"/>
				</h3>
				<ul class="main">
					<xsl:for-each select="root/parent">
						<li>
							<xsl:for-each select="span">
								<span class="color">
									<xsl:value-of select="child::text()"/>
								</span>
							</xsl:for-each>
							<xsl:value-of select="child::text()"/>

							<xsl:for-each select="sibling">
								<ul>
									<li style="margin: 5px; list-style: circle">
										<xsl:value-of select="child::text()"/>
										<xsl:for-each select="span">
											<span class="color">
												<xsl:value-of select="child::text()"/>
											</span>
										</xsl:for-each>
											<ul>
												<xsl:for-each select="child">
													<li class="www">
														<xsl:for-each select="span">
															<span class="colors">
																<xsl:value-of select="child::text()"/>
															</span>
														</xsl:for-each>
														<xsl:value-of select="child::text()"/>
															<ul>
																<xsl:for-each select="branch">
																	<li style="margin: 5px; list-style: circle">
																		<xsl:for-each select="span">
																		<span class="color">
																			<xsl:value-of select="child::text()"/>
																		</span>
																		</xsl:for-each>
																			<xsl:value-of select="child::text()"/>	
																	</li>
																</xsl:for-each>
															</ul>
													</li>
												</xsl:for-each>
											</ul>
									</li>
								</ul>
							</xsl:for-each>
						</li>
					</xsl:for-each>
				</ul>
			</table>
				</main>	
			</body>
		</html>
	</xsl:template>
</xsl:stylesheet>