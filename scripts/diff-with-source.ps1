<#
.SYNOPSIS
  Lists or opens diff pairs between the source theme (Glamora) and Ukiyo-Glam.
.DESCRIPTION
  Run from the theme root (glam-theme). Pass -SourcePath to the folder that contains
  the source theme's sections/ and snippets/ (e.g. C:\path\to\glamora).
  Use -OpenInEditor to open each pair in VS Code (code --diff).
.PARAMETER SourcePath
  Full path to the source theme root (e.g. C:\path\to\glamora).
.PARAMETER OpenInEditor
  If set, runs: code --diff SOURCE_FILE OUR_FILE for each pair (one at a time).
.PARAMETER SectionsOnly
  If set, only list/open section pairs.
.PARAMETER SnippetsOnly
  If set, only list/open snippet pairs.
.EXAMPLE
  .\scripts\diff-with-source.ps1 -SourcePath "C:\path\to\glamora"
  Prints section and snippet diff pairs.
.EXAMPLE
  .\scripts\diff-with-source.ps1 -SourcePath "..\glamora" -OpenInEditor -SectionsOnly
  Opens each section pair in VS Code diff.
#>
param(
  [Parameter(Mandatory = $true)]
  [string] $SourcePath,
  [switch] $OpenInEditor,
  [switch] $SectionsOnly,
  [switch] $SnippetsOnly
)

$ThemeRoot = $PSScriptRoot + "\.."
$SourcePath = $SourcePath.TrimEnd("\", "/")

# Section pairs: source filename -> our filename (our = ug-* or product-recommendations etc.)
$SectionPairs = @(
  @("header.liquid", "ug-header.liquid"),
  @("top-bar.liquid", "ug-top-bar.liquid"),
  @("footer.liquid", "ug-footer.liquid"),
  @("slider-with-promo-image.liquid", "ug-slider-with-promo-image.liquid"),
  @("grid-banner.liquid", "ug-grid-banner.liquid"),
  @("main-product.liquid", "ug-main-product.liquid"),
  @("main-collection-banner.liquid", "ug-main-collection-banner.liquid"),
  @("main-collection-product-grid.liquid", "ug-main-collection-product-grid.liquid"),
  @("main-cart-items.liquid", "ug-main-cart-items.liquid"),
  @("main-cart-footer.liquid", "ug-main-cart-footer.liquid"),
  @("collection-list.liquid", "ug-collection-list.liquid"),
  @("featured-collection.liquid", "ug-featured-collection.liquid"),
  @("featured-blog.liquid", "ug-featured-blog.liquid"),
  @("multicolumn.liquid", "ug-multicolumn.liquid"),
  @("testimonials.liquid", "ug-testimonials.liquid"),
  @("newsletter.liquid", "ug-newsletter.liquid"),
  @("instagram-gallery.liquid", "ug-instagram-gallery.liquid"),
  @("product-tab.liquid", "ug-product-tab.liquid"),
  @("main-search.liquid", "ug-main-search.liquid")
)

# Snippet pairs: source -> ours
$SnippetPairs = @(
  @("card-product.liquid", "ug-card-product.liquid"),
  @("cart-drawer.liquid", "ug-cart-drawer.liquid"),
  @("breadcrumb.liquid", "ug-breadcrumb.liquid"),
  @("facets.liquid", "ug-facets.liquid"),
  @("price.liquid", "ug-price.liquid"),
  @("product-media.liquid", "ug-product-media.liquid"),
  @("section-heading.liquid", "ug-section-heading.liquid"),
  @("social-icons.liquid", "ug-social-icons.liquid")
)

function Write-Pairs {
  param($Pairs, $Subdir)
  $SrcDir = Join-Path $SourcePath $Subdir
  $OurDir = Join-Path $ThemeRoot $Subdir
  foreach ($p in $Pairs) {
    $src = Join-Path $SrcDir $p[0]
    $our = Join-Path $OurDir $p[1]
    $srcExists = Test-Path -LiteralPath $src
    $ourExists = Test-Path -LiteralPath $our
    if ($srcExists -and $ourExists) {
      Write-Host "  $($p[0])  <->  $($p[1])"
      if ($OpenInEditor) {
        & code --diff $src $our
      }
    } else {
      Write-Host "  [SKIP] $($p[0]) <-> $($p[1])  (src:$srcExists our:$ourExists)"
    }
  }
}

if (-not $SnippetsOnly) {
  Write-Host "`n--- Sections (source sections/ vs theme sections/) ---"
  Write-Pairs -Pairs $SectionPairs -Subdir "sections"
}

if (-not $SectionsOnly) {
  Write-Host "`n--- Snippets (source snippets/ vs theme snippets/) ---"
  Write-Pairs -Pairs $SnippetPairs -Subdir "snippets"
}

Write-Host "`nDone. For full section/snippet list see MIRROR_ALL.md."
