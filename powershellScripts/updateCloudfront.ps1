#Create an object by querying the list of distributions by domain name. Include the two addresses, i.e www.example.com or example.com this can be passed later
$listObject = aws cloudfront list-distributions --output text --query "DistributionList.Items[].{DistributionId: Id, OriginDomainName: Origins.Items[0].DomainName}[?contains(OriginDomainName, 'sterlingtian.com'||'www.sterlingtian.com')]"

For ($i=0; $i -lt $listObject.length; $i++) {
    if($listObject[$i]-match '^\S*'){
        aws cloudfront create-invalidation --distribution-id $Matches[0] --paths "/*"
    }
    }